# viewRatio

Javascript library for browsers to automatically zoom page or element based on pages width.

## Usage

Download and include [viewRatio.min.js](https://github.com/howion/viewRatio/blob/master/lib/viewRatio.min.js)

```html
<script src="viewRatio.min.js"></script>
```

#### Options

Name     | Takes                           | Optional
-------- | ------------------------------- | :------:
elem     | `Int` `HTMLElement` `undefined` | :heavy_check_mark:
width    | `Int`                           | :x:
minWidth | `Int` `undefined`               | :heavy_check_mark:
maxWidth | `Int` `undefined`               | :heavy_check_mark:

#### Example - Resize Page

```js
// CREATE VIEW RATIO OBJECT
var $viewRatio = viewRatio({
    maxWidth: 1920, // STOP RESIZING IF WIDTH BIGGER THAN 1920px
    minWidth: 480 , // STOP RESIZING IF WIDTH SMALLER THAN 480px
    width: 1920     // ZOOM WILL BE BASED ON THIS WIDTH
})

// INITAL RESIZE
$viewRatio.resize()

// FIRE RESIZE EVENT ON WINDOW RESIZE
window.addEventListener('resize', $viewRatio.resize);
```

#### Example - Resize Specific Element

```js
// CREATE VIEW RATIO OBJECT
var $viewRatio = viewRatio({
    elem: '.custom-div',
    width: 1920
})

// INITAL RESIZE
$viewRatio.resize()

// FIRE RESIZE EVENT ON WINDOW RESIZE
window.addEventListener('resize', $viewRatio.resize);
```

## 

## License

[**MIT**](https://github.com/howion/viewRatio/blob/master/LICENSE)
