import React from 'react'
import DonorLayout from '../../components/layout/DonorLayout'
import notificationsData from '../../data/notifications.json'

/**
 * NotificationsPage Component
 * Shows donor's notifications
 */
export function NotificationsPage() {
  return (
    <DonorLayout>
      <h1 className="text-4xl font-bold text-gray-900 mb-2">Notifications</h1>
      <p className="text-gray-600 mb-8">Your recent notifications</p>

      <div className="space-y-4">
        {notificationsData.map((notif) => (
          <div key={notif.id} className="card border-l-4 border-blood-red">
            <div className="flex items-start justify-between">
              <div>
                <h3 className="font-bold text-gray-900">{notif.title}</h3>
                <p className="text-gray-600 text-sm mt-1">{notif.message}</p>
                <p className="text-xs text-gray-500 mt-2">{new Date(notif.date).toLocaleDateString()}</p>
              </div>
              <span className={`badge ${notif.priority === 'critical' ? 'bg-red-100 text-red-800' : 'badge-blood'}`}>
                {notif.priority}
              </span>
            </div>
          </div>
        ))}
      </div>
    </DonorLayout>
  )
}

export default NotificationsPage
