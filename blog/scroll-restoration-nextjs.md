---
title: Scroll Restoration in Nextjs
authors: hunghg
tags: [Nextjs, Scroll Restoration]
image: https://decodenatura.com/static/fb8aa1bb70c9925ce1ae22dc2711b343/nextjs-logo.png
---

## Experimental scroll restoration flag

Luckily, Next.js has an [experimental scrollRestoration flag](https://github.com/vercel/next.js/commit/38bd1a024cb25923d8ea15f269a7294d073684d8) that you can enable to automatically restore the scroll positions.

<!--truncate-->

You can enable it in your `next.config.js` file this way:

```js title=next.config.js
module.exports = {
  experimental: {
    scrollRestoration: true,
  },
};
```

## next-router-scroll

There are some cases where you need to take control of how your application scroll is handled; namely, you may want to restore scroll when the user is navigating within your application pages, but you need to do extra work before or after the page has changed, either by using some sort of page transition or any other feature.
In these cases, I’d suggest you give `@moxy/next-router-scroll` a try: This package is built on top of [scroll-behavior](https://www.npmjs.com/package/scroll-behavior) and it actively listens to Next.js router events, writing the scroll values associated with the current location in the Session Storage and reading these values whenever `updateScroll()` is called.

## Completely disabling scroll restoration

There’s one inconsistency I noticed around not making scroll restoration work automatically in Next.js: by default, scroll restoration doesn’t work when the navigation logic is being handled by JavaScript, but it works fine when it’s handled by the browser (e.g.: on a full-refresh or while navigating with JavaScript disabled).

So, in the rare occasions where you want to fully disable scroll restoration, remember to add this snippet to the `<head>` of your project:

```tsx
import Head from 'next/head';

export default function ScrollRestorationDisabler() {
  return (
    <Head>
      {/* Tell the browser to never restore the scroll position on load */}
      <script
        dangerouslySetInnerHTML={{
          __html: `history.scrollRestoration = "manual"`,
        }}
      />
    </Head>
  );
}
```
