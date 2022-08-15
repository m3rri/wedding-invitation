## 🎉 merry's wedding-invitation-letter 🎈
---
### [welcome merri's DEVELOG](https://m3rri.github.io/blog)
```jsx
import {StrictMode} from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Blog from './Blog';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <StrictMode>
    <BrowserRouter>
      <Routes>
        <Route path="/wedding-invitation/it-developer"
            element={<Blog />}
            props={{
                blogLink: 'https://m3rri.github.io/blog',
                msg: 'Please come and check out the post with the development story',
                description: 'React, emotion, github actions'
            }}
        />
        <Route path="/wedding-invitation/*"
            element={<Blog />}
            props={{
                msg: 'That can\'t be true..🤔'
            }}
        />
      </Routes>
    </BrowserRouter>
  </StrictMode>
);
```


## 👩‍💻 Dependencies
---
* Language
  - javascript(ES6+)
* Library
  - [React.js](https://reactjs.org/blog/2022/03/29/react-v18.html) (v18)
  - [emotion](https://emotion.sh/docs/install) (for CSS-in-JS)
  - [kakao maps sdk](https://github.com/JaeSeoKim/react-kakao-maps-sdk)
  - [fontawesome](https://fontawesome.com/v5/docs/web/use-with/react)
  - [swiper](https://swiperjs.com/react)
  - [device detect](https://github.com/duskload/react-device-detect)
  - [copy to clipboard](https://github.com/nkbt/react-copy-to-clipboard)
* CI/CD
  - git ▶ github actions ▶ github-pages