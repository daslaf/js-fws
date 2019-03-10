# About this repo

Once in a while I like to try new libraries, technologies and such and I mostly build toy applications or components in online REPL environments or in my local machine. However, most of these toy applications don't have to deal with the type of problems you'll face when developing a real world application that must work in a production environment.

The purpose of this project is to host multiple implementations of the same application with different flavors and different libraries. The repo will also contain a backend, although at this point I'm not sure if it will be a toy backend with something like `json-server` or perhaps a full blown nodejs backend - It could be a RESTful API or perhaps a GraphQL based API, I'm not sure about that either (I have little to no experience writing code on the backend, so it will be an exploration process as well). The overall idea is that all the versions of the application will work with the same backend.

I will try to reuse as much code as possible. Let's say I start building an application with React and Redux and I have a bunch of UI components. If I start working on a new version of the app with React and Mobx, I'd love to use the same components whenever possible, so I don't have to copy-paste or mantain the same components in two places.

In order to achieve this I'm thinking about using Lerna to handle these packages individually and having them all synced up correctly. I've never used Lerna before so you guess it, it will be a learning process as well.

I'm also thinking about streaming the development process, I think it will be an interesting experience.
