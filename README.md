# Add a cookie line to your Enonic XP site!

Telling your users that you use cookies to track them is a mundane task that
just needs to be implemented. A lot of countries require this by law, so it's
nice to be on the safe side.

This application adds a cookie line to your site that you can set up and style
as you like.

> **Note:** Requires Enonic v6.4.1

## How to use

The application is available through the
[Enonic Market](https://market.enonic.com/vendors/selbekk/io.selbekk.cookieLine).
This means starting to use this application is easier than the first few levels
of Super Mario.

### Step 1: Install application
Head over to the Applications section of your Enonic XP installation. Click
"Install", and then select the "Enonic Market" tab. Find "Cookie Line", and
click the install button.

Bam, the application is now installed.

### Step 3: Add app to your site

In the content manager, select your site and click `edit`. Search for
`Cookie line` in the `Applications` search box, and select it.

### Step 4: Configure

To keep things simple, you don't have to configure a lot. You'll be presented
with a few choices:

- **Design** - Choose the theme of the cookie line - or implement your own
- **Button order** - Choose what order you want the buttons to appear.
- **Title** - An optional title for your cookie line.
- **Introduction** - A text saying that you're using cookies.
- **Accept button text** - The text on the "okay I got it" button
- **Read more button text** - The text on the "please tell me more" button
- **Read more link** - The page containing more info on your cookie use

## Custom styling of the cookie line

In order for you to have full control of the look-and-feel of the cookie line,
the application provides a "none" design choice. If you want to implement your
own design, please choose this option.

The application adds the following markup to the bottom of your site's
`<body />` tag:

```html
<div class="cookie-line js-cookie-line">
    <div class="cookie-line-inner">
        <h2 class="app-cookie-line-title">{{ title }}</h2>
        <p class="cookie-line-intro">{{ intro }}</p>
        <div class="cookie-line-buttons">
            <a class="cookie-line-button mod-accept js-accept-cookies" href="#cookie-line-accept">{{ accept button }}</a>
            <a class="cookie-line-button mod-read-more js-accept-cookies" href="{{ read more link}}">{{ read more button }}</a>
        </div>
    </div>
</div>
```

This structure is designed to give you plenty of flexibility when implementing
your custom styling.

>**Note:** Once the cookie is accepted, the class `is-hidden` is added to
`div.cookie-line`.

## Open open source

If you want to contribute, please create a pull request. If it's approved,
you'll get full contributor access, as well as your name on the contributors
list. We trust you!
