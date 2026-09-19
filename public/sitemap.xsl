<?xml version="1.0" encoding="UTF-8"?>
<xsl:stylesheet version="2.0"
  xmlns:html="http://www.w3.org/TR/REC-html40"
  xmlns:sitemap="http://www.sitemaps.org/schemas/sitemap/0.9"
  xmlns:xsl="http://www.w3.org/1999/XSL/Transform">
  <xsl:output method="html" version="1.0" encoding="UTF-8" indent="yes"/>
  <xsl:template match="/">
    <html xmlns="http://www.w3.org/1999/xhtml" lang="en">
      <head>
        <title>MANKHE XML Sitemap</title>
        <meta http-equiv="Content-Type" content="text/html; charset=utf-8" />
        <style type="text/css">
          body {
            font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Oxygen-Sans, Ubuntu, Cantarell, "Helvetica Neue", sans-serif;
            color: #1a2a1d;
            background: #F4F1EA;
            margin: 0;
            padding: 40px 20px;
          }
          .container {
            max-width: 980px;
            margin: 0 auto;
            background: #FFFFFF;
            padding: 40px;
            border-radius: 16px;
            box-shadow: 0 4px 20px rgba(26, 42, 29, 0.08);
          }
          h1 {
            font-family: Georgia, serif;
            font-size: 32px;
            margin: 0 0 8px 0;
            color: #1a2a1d;
          }
          p.desc {
            font-size: 14px;
            color: #556B2F;
            margin: 0 0 24px 0;
          }
          .stats {
            background: #F4F1EA;
            padding: 12px 18px;
            border-radius: 8px;
            margin-bottom: 24px;
            font-size: 13px;
            color: #1a2a1d;
          }
          table {
            width: 100%;
            border-collapse: collapse;
            font-size: 13px;
          }
          th {
            background: #1a2a1d;
            color: #F4F1EA;
            text-align: left;
            padding: 12px 14px;
            font-weight: 600;
            letter-spacing: 0.05em;
            text-transform: uppercase;
            font-size: 11px;
          }
          th:first-child {
            border-top-left-radius: 8px;
          }
          th:last-child {
            border-top-right-radius: 8px;
          }
          td {
            padding: 12px 14px;
            border-bottom: 1px solid #EFECE6;
          }
          tr:hover td {
            background: #FAF8F5;
          }
          a {
            color: #1a2a1d;
            text-decoration: none;
            font-weight: 500;
          }
          a:hover {
            color: #556B2F;
            text-decoration: underline;
          }
          .priority {
            display: inline-block;
            padding: 2px 8px;
            background: rgba(85, 107, 47, 0.12);
            color: #556B2F;
            border-radius: 4px;
            font-weight: 600;
            font-family: monospace;
          }
          .footer {
            margin-top: 30px;
            font-size: 12px;
            color: #888888;
            text-align: center;
          }
        </style>
      </head>
      <body>
        <div class="container">
          <h1>MANKHE XML Sitemap</h1>
          <p class="desc">Standard XML Sitemap for search engines and web crawlers (Google, Bing, Yahoo).</p>
          <div class="stats">
            Total URLs in sitemap: <strong><xsl:value-of select="count(sitemap:urlset/sitemap:url)"/></strong>
          </div>
          <table>
            <thead>
              <tr>
                <th style="width: 50%;">URL</th>
                <th style="width: 15%;">Priority</th>
                <th style="width: 15%;">Changefreq</th>
                <th style="width: 20%;">Last Modified</th>
              </tr>
            </thead>
            <tbody>
              <xsl:for-each select="sitemap:urlset/sitemap:url">
                <tr>
                  <td>
                    <xsl:variable name="itemURL">
                      <xsl:value-of select="sitemap:loc"/>
                    </xsl:variable>
                    <a href="{$itemURL}">
                      <xsl:value-of select="sitemap:loc"/>
                    </a>
                  </td>
                  <td>
                    <span class="priority">
                      <xsl:value-of select="sitemap:priority"/>
                    </span>
                  </td>
                  <td>
                    <xsl:value-of select="sitemap:changefreq"/>
                  </td>
                  <td>
                    <xsl:value-of select="sitemap:lastmod"/>
                  </td>
                </tr>
              </xsl:for-each>
            </tbody>
          </table>
          <div class="footer">
            MANKHE Private Limited • Dhamtari, Chhattisgarh, India
          </div>
        </div>
      </body>
    </html>
  </xsl:template>
</xsl:stylesheet>
