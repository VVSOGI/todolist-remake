### Frontend (Client)

## Why separate components ui-components packages?

Originally, all components were tied to the client, but after the stories package was added, I had a problem with adding the same components to stories, so I decided to manage them separately. tried to apply a ui-component package based on styled-component, but styled-component is not next js friendly by default (SSR related issue), so just switched to tailwind css and created a ui components package.

## But still, the components folder remains on the client, why?

I don't think it's possible to completely separate components from the client. Currently, the separated components are all presenters that receive and use logic, but I need to have a component that is used as a container, so I left the components folder to account for that.

## Previous projects usually called next js own server before calling the Backend API, why did change it?

Using your own next js server and making API calls to the server certainly sidesteps the issue with CORS, and it's nice to have more areas where the frontend can do things. However, it also means more code to write, and most importantly, more problems when you build it. If you can't access the server when building, next js can't build (SSR), so in order to build in production, you have to do a dev start on the production server, build, and then do a production start again, which I don't think is natural.

Rather, I decided that it would be much more natural to focus on a single backend that is thoroughly defended against CORS and relies on the client's API calls.

[#162 issue](https://github.com/VVSOGI/todolist-remake/issues/162)

## Haven't thought about using a state management library?

I love using libraries like Recoil, Redux, and react-query, but lately I've been wondering if there's something “too much” going on. There are many features for state management in existing React. useContext, useReducer... Basically, there is useState. The current state management techniques used are useState and useHooks. I didn't use any state management libraries, but I think I wrote a pretty clean code, so I'm not sure if I need them.

I think I will feel the need for something only when the project gets bigger and there are too many states to manage, but I think I will probably manage it with Context or Reducer even if the states increase.

Also, I think the issue with props drilling might be a problem caused by abstracting the component too much, but this is just my opinion and I will definitely change my opinion in a few years, so don't care sir!.

<img width="1552" alt="client" src="https://github.com/user-attachments/assets/d7b2efbd-9588-42cd-b8ab-4d414b6668f8" />
