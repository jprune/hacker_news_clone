import React from 'react';

const pages = ['Guidelines', 'FAQ', 'Lists', 'API', 'Security', 'Legal', 'Apply to YC', 'Contact'];

function Footer() {
  return (
    <div>
      <ul className="flex h-24 items-center justify-center bg-slate-900 text-white">
        {
            pages.map((item, i) => (
              <li key={i} className="mx-4">
                {item}
              </li>
            ))
        }
      </ul>
    </div>
  );
}

export default Footer;
