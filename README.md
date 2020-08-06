This application is a fork of [selbekk's Cookie Line applicaiton](https://github.com/selbekk/app-cookie-line), updated to support Enonic 7.0.0.

This application is actively maintained, if you have any suggestions you can either create a pull request or create an issue in the GitHub.


# Add a cookie line to your Enonic XP site!

To comply with GDPR, you need to inform your users that your website uses cookies.

This application adds a cookie consent line to your site, it comes included with two style options(light and dark), but is also fully customizable.


> **Note:** Requires Enonic v7.0.0

## How to use

The application is available here:
[Enonic Market](https://market.enonic.com/vendors/selbekk/io.selbekk.cookieLine).
[GitHub](https://github.com/theberzer/app-cookie-consent)

### Step 1: Install application
You have two options to install the application:
1. In admin mode, open Applications section. Click "Install".
Find "Cookie Consent" and click the install button.

2.  Firstly, build the application locally. 
In admin mode, open Applications section. Click "Install".
Find the build files on your computer and select the compiled .jar.

### Step 3: Add app to your site

In the content manager, select your site and click `edit`. Search for
`Cookie Consent` in the `Applications` search box, and select it.

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
            <a class="cookie-line-button mod-read-more js-accept-cookies" href="{{ read more link}}">{{ read more button }}</a>
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
