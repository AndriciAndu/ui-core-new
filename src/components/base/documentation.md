#

## 

Cover:
- baseline functionality
- baseline a11y concerns
- remove styling

Allow full extendability
- no highjacking of any prop

If props are intercepted:
- `className`: it adds internal classes, ALONGSIDE the provided className - 

```js
  <MyComp className={classNames(styles.myLocalClass, props.className)} />
```

- eventListeners: creates a local function that handles extra logic, but also calls the passed function

```js
  const _onChange = useCallback(() => {
    // do extra logic

    props?.onChange?.();
  }, []);

  <MyComp onChange={_onChange} />
```


* remove all default styling

* make use of existing out-of-the-box native functionality
-- support expected functionality
-- support expected a11y parameters

* compute expected a11y baseline cases (ex: `disabled` prop on `<input>` translates to `"aria-disabled"`)



Styling

* remove baseline styles - colors, borders, outlines
* handle `states` - hover, focus, focus-within, focus-visible

* remove baseline sizing - min-width, min-height
* update sizing to take full space of container - through both width and flex

