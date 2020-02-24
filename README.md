<p align="center">
  <a href="https://builton.dev">
    <img alt="BuiltOn" src="https://user-images.githubusercontent.com/6507454/75164542-dd308e80-5718-11ea-8f98-8a5c92366d9e.png" width="100"/>
  </a> 
  <span>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</span>
    <img alt="♥" src="https://user-images.githubusercontent.com/6507454/75165245-ff76dc00-5719-11ea-90e4-eb75512d5896.png" width="100" />
  <a href="https://www.gatsbyjs.org/">
    <img alt="Gatsby" src="https://user-images.githubusercontent.com/6507454/75164538-dc97f800-5718-11ea-9675-5dfad569386b.png" width="150" />
  </a>

</p>
<h1 align="center">
  BuiltOn ♥ Gatsby's starter
</h1>

This is an e-commerce website starter skeleton for Gatsby v2 using BuiltOn as source.

This project is a boilerplate with a minimal base for building advanced GatsbyJS and BuiltOn powered website.

## 🚀 Quick start

1.  **Create a Gatsby site.**

    Use the Gatsby CLI to create a new site, specifying the BuiltOn starter.

    ```shell
    # create a new Gatsby site using the BuiltOn starter
    gatsby new my-builton-website https://github.com/builtondev/gatsby-starter-builton
    ```

1.  **Edit the configuration file with your BuiltOn API Key.**

    In the `gatsby-config.js` file.
    
    ```diff
    {
      resolve: `@builton/gatsby-source-builton`,
      options: {
        api_key:
    -      "i3-mbHB_XMZ74fwDl0SHvWecdmzAP7whyrvGjS_A7WiRqtOxnAiIL1FRFVx9AD2sqxAQ9yjv13ueTPI40TXnOA==",
    +      "<your-api-key>",
      }
    }
    ```

1.  **Start developing.**

    Navigate into your new site’s directory and start it up.

    ```shell
    cd my-builton-website/
    gatsby develop
    ```

1.  **Open the source code and start editing!**

    Your site is now running at `http://localhost:8000`!

    _Note: You'll also see a second link: _`http://localhost:8000/___graphql`_. This is a tool you can use to experiment with querying your data. Learn more about using this tool in the [Gatsby tutorial](https://www.gatsbyjs.org/tutorial/part-five/#introducing-graphiql)._

    Open the `my-builton-website` directory in your code editor of choice and edit `src/pages/index.js`. Save your changes and the browser will update in real time!
