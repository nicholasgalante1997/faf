export function getHtmlTemplate(
  route: { title: string; description: string; path: string },
  html: string,
  bundlePath: string,
) {
  return `<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>${route.title} | Hope Foundation</title>
    <meta name="description" content="${
      route.description || "Building hope, changing lives through compassionate action and community support."
    }">
    <link rel="stylesheet" href="/main.css">
    <link rel="stylesheet" href="/components.css">
</head>
<body>
    <div id="root">${html}</div>
    <script type="module" src="/${bundlePath}"></script>
</body>
</html>`;
}
