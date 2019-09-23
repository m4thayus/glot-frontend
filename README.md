# glot

This is the frontend for _glot_, a place to translate for fun and profit. The purpose of the app is to connect translators with those who need translations.

This project utilizes React to provide a dynamic, reactive user-experience. Additionally, it pulls data from the [backend](https://github.com/m4thayus/glot-backend) using GraphQL queries. The data is then stored using Apollo, thanks to its cache. Prototype styling is done using Sematic UI React.

The core functionality of _glot_ revolves around three main user stories:
1. A user can submit a text for translation, into another language, or for clarification in the same language e.g. idioms
2. A user, who knows the relevant language(s), can submit a translation for a pending text.
3. A user, who knows the relevant language(s), can "upvote" or "downvote" a translation of a text.

Once a translation reaches and arbitrary threshold of, in this case 3, cumulative positive (i.e "up") votes. The translation and text are marked complete.

To view a live version of this project go to [https://glot.conceptualsoup.blog/](https://glot.conceptualsoup.blog/). A basic demo user is provided with the below credentials:

    User: demo
    Pass: 123
