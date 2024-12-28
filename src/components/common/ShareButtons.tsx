import React from 'react';

interface ShareButtonsProps {
  url: string;
  title: string;
}

export const ShareButtons: React.FC<ShareButtonsProps> = ({ url, title }) => {
  const encodedUrl = encodeURIComponent(url);
  const encodedTitle = encodeURIComponent(title);

  const shareLinks = {
    facebook: `https://www.facebook.com/sharer/sharer.php?u=${encodedUrl}`,
    twitter: `https://twitter.com/intent/tweet?url=${encodedUrl}&text=${encodedTitle}`,
    whatsapp: `https://api.whatsapp.com/send?text=${encodedTitle}%20${encodedUrl}`
  };

  return (
    <div className="flex space-x-4 justify-center">
      <a
        href={shareLinks.facebook}
        target="_blank"
        rel="noopener noreferrer"
        className="bg-[#1877f2] text-white px-4 py-2 rounded-lg hover:bg-[#166fe5] transition-colors"
      >
        Share on Facebook
      </a>
      <a
        href={shareLinks.twitter}
        target="_blank"
        rel="noopener noreferrer"
        className="bg-[#1da1f2] text-white px-4 py-2 rounded-lg hover:bg-[#1a91da] transition-colors"
      >
        Share on Twitter
      </a>
      <a
        href={shareLinks.whatsapp}
        target="_blank"
        rel="noopener noreferrer"
        className="bg-[#25d366] text-white px-4 py-2 rounded-lg hover:bg-[#22bf5b] transition-colors"
      >
        Share on WhatsApp
      </a>
    </div>
  );
};