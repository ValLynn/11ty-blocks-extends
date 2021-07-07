module.exports = function(eleventyConfig) {



  // Optionally return a Config object
  return {

    dir: {
      //input : "src",
      // output: "wherever"
    },

    dataTemplateEngine: "njk", 
    htmlTemplateEngine: "njk", 
    markdownTemplateEngine: "njk", 

  };
};