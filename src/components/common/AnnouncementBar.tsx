import * as React from 'react';
import { useState, useEffect } from 'react';

interface Announcement {
  announcement: string;
}

export default function AnnouncementBar() {
  const [data, setData] = useState<Announcement | null>(null);
  const [dismissed, setDismissed] = useState(false);

  useEffect(() => {
    if (sessionStorage.getItem('announcement-dismissed')) return;

    fetch("/api/announcement/")
      .then(r => r.json())
      .then(json => {
        const item = json?.announcement?.[0];
        if (item?.announcement) setData({ announcement: item.announcement });
      })
      .catch(() => { });
  }, []);

  const dismiss = () => {
    setDismissed(true);
    sessionStorage.setItem('announcement-dismissed', '1');
  };

  if (dismissed || !data) return null;

  return (
    <div style={{ background: '#0f6e56', color: '#fff', position: 'relative' }}>
      <div
        className="announcement-content"
        style={{
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          padding: '10px 48px',
          fontSize: '14px',
          maxWidth: '900px',
          margin: '0 auto',
        }}
        dangerouslySetInnerHTML={{ __html: data.announcement }}
      />
      <style>{`
        .announcement-content a {
          color: #fff;
          text-decoration: underline;
          font-weight: bold;
          margin-right: 4px;
        }
        .announcement-content p {
          margin: 0;
        }
      `}</style>
      <button
        onClick={dismiss}
        aria-label="Dismiss announcement"
        style={{
          position: 'absolute',
          right: '16px',
          top: '50%',
          transform: 'translateY(-50%)',
          background: 'none',
          border: 'none',
          color: '#fff',
          opacity: 0.7,
          cursor: 'pointer',
          fontSize: '20px',
          lineHeight: 1,
          padding: '4px',
        }}
      >
        ×
      </button>
    </div>
  );
}
