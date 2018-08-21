<!DOCTYPE html>
<html lang="$ContentLocale">

<head>
    <% base_tag %>
    <title><% if $MetaTitle %>$MetaTitle<% else %>$Title<% end_if %> &raquo; $SiteConfig.Title</title>
    <meta charset="utf-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0, maximum-scale=1.0, user-scalable=0">
    <meta http-equiv="Content-Type" content="text/html; charset=utf-8">
    $MetaTags(false)

    <% if $WebpackRunning %>
        <link rel="stylesheet" href="//$WebpackIP:$WebpackPort/styles/bundle.css" />
    <% else %>
    <% require themedCSS('client/dist/styles/bundle') %>
    <% end_if %>

</head>
<body class="$ClassName" <% if $i18nScriptDirection %>dir="$i18nScriptDirection"<% end_if %>>
    <div class="wrap" role="document">
       $Layout
    </div>
    <% if $WebpackRunning %>
        <script src="//$WebpackIP:$WebpackPort/js/main.js"></script>
    <% else %>
        <script src="$ResourceURL(app)/client/dist/js/main.js"></script>
    <% end_if %>
</body>
</html>