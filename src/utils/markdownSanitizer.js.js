const marked = require('marked');
const sanitizeHtml= require('sanitize-html')
const TurndownService = require('turndown')


function sanitizemarkdownContent( markdownContent){
    const turndownService = new TurndownService();


    // 1 convert markdown to html  
    const converthtml = marked.parse(markdownContent);
   // console.log(converthtml);

    // 2 Sanitize html 
    const sanitizedHtml = sanitizeHtml(converthtml,{
        allowedTags : sanitizeHtml.defaults.allowedTags
    })
   // console.log(sanitizedHtml);

    //3 Convert the sanitized html back to markdown
    const sanitizeContent = turndownService.turndown(sanitizedHtml);
   // console.log(sanitizeContent);

    return sanitizeContent;
}


module.exports = sanitizemarkdownContent;