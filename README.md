# viewRatio

**0.694 kb** Javascript Lib to Zoom html elements based on window width

## Usage

Download and include [viewRatio.min.js](https://github.com/howion/viewRatio/blob/master/lib/viewRatio.min.js)

```html
<script src="viewRatio.min.js"></script>
```

#### Options

Name      | Takes                           | Optional            | Defaults To
--------- | ------------------------------- | :-----------------: | :---------:
elem      | `Int` `HTMLElement` `undefined` | :heavy_check_mark:  | `<BODY>`
width     | `Int`                           | :x:                 | 
zoomRatio | `Float` `undefined`             | :heavy_check_mark:  | 1
minWidth  | `Int` `undefined`               | :heavy_check_mark:  | 0
maxWidth  | `Int` `undefined`               | :heavy_check_mark:  | INF

#### Methods

> When viewRatio disabled **`.scale()`** won't work

**`.enable()`** Enable viewRatio

**`.disable()`** Disable viewRatio

**`.scale()`** Compute and Process Zoom

#### Example - Zoom Page

```js
// CREATE VIEW RATIO OBJECT
var $viewRatio = viewRatio({
    maxWidth: 1920, // STOP ZOOMING IF WIDTH BIGGER THAN 1920px
    minWidth: 480,  // STOP ZOOMING IF WIDTH SMALLER THAN 480px
    width: 1920,    // ZOOM WILL BE BASED ON THIS WIDTH
    zoomRatio: 0.5, // ZOOM WILL BE 0.5 SLOWER
    zoomRatio: 2    // ZOOM WILL BE 2x  FASTER
})

// INITAL ZOOM
$viewRatio.scale()

// FIRE SCALE EVENT ON WINDOW RESIZE
window.addEventListener('resize', $viewRatio.scale);
```

#### Example - Zoom Specific Element

```js
// CREATE VIEW RATIO OBJECT
var $viewRatio = viewRatio({
    elem: '.custom-div',
    width: 1920
})

// INITAL ZOOM
$viewRatio.scale()

// FIRE SCALE EVENT ON WINDOW RESIZE
window.addEventListener('resize', $viewRatio.scale);
```

## License

[**MIT**](https://github.com/howion/viewRatio/blob/master/LICENSE)
