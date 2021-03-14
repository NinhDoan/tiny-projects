# React Shop

Live: https://react-shop-gold.vercel.app/

## Stack

- React: hooks, reducer pattern, context
- Styled components
- Axios
- Auth0
- Vercel

## Research

User Stories

![diagram 1](https://raw.githubusercontent.com/nguyentuan1696/tiny-projects/main/react-projects/react-shop/diagram/linh-tinh-Page-13.png)

Featured

![diagram 1](https://raw.githubusercontent.com/nguyentuan1696/tiny-projects/main/react-projects/react-shop/diagram/linh-tinh-Page-14.png)

## Docs
React hook context api, replace redux

Get more: 
- https://www.sitepoint.com/replace-redux-react-hooks-context-api/

## Note

Using this react version to fix Hot Reloading

```
"react": "^16.13.1",
"react-dom": "^16.13.1",
"react-scripts": "3.4.3",
```

Tricky in App.js line 35
Fix Invalid hook call 
```
<Route path='/products/:id' children={<SingleProduct />}></Route>

```

Logic display stars reviews

```
// @param: stars is number of star review
  const tempStars = Array.from({ length: 5 }, (_, index) => {
    // index 0 - 4
    const number = index + 0.5
    return (
      <span key={index}>
        {stars >= index + 1 ? (
          <BsStarFill />
        ) : stars >= number ? (
          <BsStarHalf />
        ) : (
          <BsStar />
        )}
      </span>
    )
  })
```
