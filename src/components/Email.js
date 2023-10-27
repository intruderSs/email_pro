import React, { useState } from 'react';
import fs from 'fs'; // For file system operations (e.g., reading the .eml file)
import { MailParser } from 'mailparser';

function EmailLinkExtractor() {
  const [attachedLinks, setAttachedLinks] = useState([]);

  // Function to extract attached links from the email
  function extractAttachedLinks(email) {
    const attachedLinks = [];

    // Process each attachment in the email
    email.attachments.forEach((attachment) => {
      const data = attachment.content.toString();
      attachedLinks.push(data);
    });

    return attachedLinks;
  }

  // Function to handle file input and extraction
  function handleFileInputChange(event) {
    const file = event.target.files[0];

    if (!file) {
      return;
    }

    // Read the selected .eml file
    const reader = new FileReader();

    reader.onload = async () => {
      const emlData = reader.result;

      // Parse the .eml file
      const mailparser = new MailParser();

      mailparser.on('end', (email) => {
        const attachedLinks = extractAttachedLinks(email);
        setAttachedLinks(attachedLinks);
      });

      mailparser.write(emlData);
      mailparser.end();
    };

    reader.readAsArrayBuffer(file);
  }

  return (
    <div>
      <input type="file" accept=".eml" onChange={handleFileInputChange} />
      {attachedLinks.length > 0 && (
        <div>
          <h3>Attached Links:</h3>
          <ul>
            {attachedLinks.map((link, index) => (
              <li key={index}>{link}</li>
            ))}
          </ul>
        </div>
      )}
    </div>
  );
}

export default EmailLinkExtractor;
