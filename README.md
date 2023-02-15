# Getting Started with Create React App

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

## Available Scripts

In the project directory, you can run:

### `npm start`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in your browser.

The page will reload when you make changes.\
You may also see any lint errors in the console.

### `npm test`

Launches the test runner in the interactive watch mode.\
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

### `npm run build`

Builds the app for production to the `build` folder.\
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.\
Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.

### `npm run eject`

**Note: this is a one-way operation. Once you `eject`, you can't go back!**

If you aren't satisfied with the build tool and configuration choices, you can `eject` at any time. This command will remove the single build dependency from your project.

Instead, it will copy all the configuration files and the transitive dependencies (webpack, Babel, ESLint, etc) right into your project so you have full control over them. All of the commands except `eject` will still work, but they will point to the copied scripts so you can tweak them. At this point you're on your own.

You don't have to ever use `eject`. The curated feature set is suitable for small and middle deployments, and you shouldn't feel obligated to use this feature. However we understand that this tool wouldn't be useful if you couldn't customize it when you are ready for it.

## How to install package

1. remove package-lock.json file
2. npm install

## devDependencies

- npm i eslint-config-prettier --save-dev(eslint-config-prettier : prettier와 충돌할 설정들을 비활성화)
- npm i eslint-plugin-prettier --save-dev(eslint-plugin-prettier : eslint에 prettier의 포매팅 기능을 추가)
- npm i prettier --save-dev --save-exact(--save-exact : 버전이 달라지면서 생길 스타일 변화를 막기 위함)

## dependencies

- npm i react-router-dom --save(react-router-dom : router 사용)
- npm i styled-components --save(styled-components : javascript에서 css 사용이 가능한 스타일링 프레임워크)
- npm i styled-reset --save(styled-reset : css 설정 초기화)
- npm i react-slick --save(slick : slide 배너 라이브러리)
- npm i react-icons(icons : 리액트에서 제공하는 아이콘)
