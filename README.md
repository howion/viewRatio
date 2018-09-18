# viewRatio-dev

**0.833 kb** Javascript Lib to Zoom Page based on window width

## Usage

Download and include [viewRatio.min.js](https://github.com/howion/viewRatio/blob/master/lib/viewRatio.min.js)

```html
<script src="viewRatio.min.js"></script>
```

#### Options

Name      | Takes                           | Optional            | Defaults To
--------- | ------------------------------- | :-----------------: | :---------:
width     | `Int`                           |                     | --
zoomRatio | `Float` `undefined`             | :heavy_check_mark:  | 1
maxWidth  | `Int` `undefined`               | :heavy_check_mark:  | INF
minWidth  | `Int` `undefined`               | :heavy_check_mark:  | 0

#### Methods

**`.enable()`** Enables `.scale()` method

**`.disable()`** Disables `.scale()` method

**`.scale()`** Scales based on **choices & winWidth**

**`.resetScale()`** Removes scale

**`.scaleTo( $customRatio )`** Scales to specified ratio

## Example Usage

```js
// CREATE VIEW RATIO OBJECT
var $viewRatio = viewRatio({
    maxWidth: 1920, // STOP ZOOMING IF WIDTH IS BIGGER THAN 1920px
    minWidth: 480,  // STOP ZOOMING IF WIDTH IS SMALLER THAN 480px
    width: 1920,    // ZOOM WILL BE BASED ON THIS WIDTH
    zoomRatio: 0.5, // ZOOM WILL BE 0.5 SLOWER
    zoomRatio: 2    // ZOOM WILL BE 2x  FASTER
});

// INITAL ZOOM
$viewRatio.scale();

// FIRE SCALE EVENT ON WINDOW RESIZE
window.addEventListener('resize', $viewRatio.scale, false);
```

## Last Words

First of all making something like this was hard due to cross browser support and it still has some problems so its **in development stage** for now
.
#### Known Bugs

* Edge & IE shows scrollbars on both sides
* Using `fixed` position in scaled element causes element to be not fixed. ( See [Issue](https://bugs.chromium.org/p/chromium/issues/detail?id=20574&desc=2) )

## License

[**MIT**](https://github.com/howion/viewRatio/blob/master/LICENSE)
