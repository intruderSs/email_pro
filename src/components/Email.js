import React, { useState } from 'react';

function Email() {
    const [links, setLinks] = useState([]);

  const handleFileChange = (event) => {
    const file = event.target.files[0];
    if (file) {
      const reader = new FileReader();

      reader.onload = async (e) => {
        const emailContent = e.target.result;

        // Call a function to extract links from the email content
        const extractedLinks = extractLinksFromEmail(emailContent);
        setLinks(extractedLinks);
      };

      reader.readAsText(file);
    }
  };

  const extractLinksFromEmail = (emailContent) => {
    // Use regular expressions to extract links from the email content
    const linkRegex = /https?:\/\/[^\s<>"]+/g;
    const extractedLinks = emailContent.match(linkRegex) || [];

    return extractedLinks;
  };

  return (
    <div>
      <input type="file" accept=".eml" onChange={handleFileChange} />
      <ul>
        {links.map((link, index) => (
          <li key={index}>
            <a href={link} target="_blank" rel="noopener noreferrer">
              {link}
            </a>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default Email;