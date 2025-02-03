### Storybook

## Why did you choose Storybook?

I adopted Storybooks as a documentation and testing tool to show how the design and animations of our current components work, independent of the actual business logic. It's something I'm always thinking about and working on to better understand design and collaborate with designers. As a front-end developer.

I'm still not satisfied. I don't think DX is great enough for developers to use Storybook, and I don't know if it has the features and capabilities that would naturally convince designers that they should use it. Perhaps my next project will be to create a tool for collaboration between front-end developers and designers.

## You mentioned documentation and testing on the front-end, but didn't you consider using a testing tool like Jest?

I used to do unit tests on the front end at work and often with Jest, like what button should I press, what should happen, things like that, and I would test whether the snapshot had the tags that I predicted and the content inside it was what I expected, but I think it's actually better to just pull up the page and check it out.

Even if you have the tag you want in the snapshot and what you want, it could be that this tag is display none because of a setting in your CSS, or it could be a situation where you don't actually see it but it's there in the code tree. I think on the backend, you should definitely have strong test code, but on the frontend, I think you should have tests that are simpler to see what the UI looks like and what colors it has.

## You mentioned that you're going to do more research on storybooks as a tool to find ways to make collaboration with design teams more efficient, but what kind of research is coming up?

For now, I'd like to see a feature that allows designers to simply change settings set in the design system, such as color values or component sizes. The changes made by the designer shouldn't be immediately applied to all components on the actual server, but should at least be visible as changed values in the storybook, and it would be nice to create middleware to automatically notify the development team that the changes have been made.

This shouldn't be too difficult to create, as it's a feature of storybook itself that the code is immediately applied when a value inside the component changes.

However, it's a bit of a problem whether to continue using storybook, but I'd rather find another library that's good or make my own, so I'd like to continue to find out the inconveniences and organize them, and then make a library that takes the advantages of storybook and complements the disadvantages.

<img width="1440" alt="stories" src="https://github.com/user-attachments/assets/66dbdb04-371a-449d-a809-44c40d7879ad" />
