export const fetchLatestPost = async () => {
    try {
      const response = await fetch(
        "https://ubt.podemarketing.com/wp-json/wp/v2/posts?orderby=date&order=desc&per_page=1&_embed"
      );
      if (!response.ok) throw new Error("Failed to fetch latest post");
      const data = await response.json();
      return data[0]; // Returning the latest post
    } catch (error) {
      console.error("Error fetching latest post:", error);
      throw error;
    }
  };
  
  export const fetchUsers = async () => {
    try {
      const response = await fetch("https://ubt.podemarketing.com/wp-json/wp/v2/users");
      if (!response.ok) throw new Error("Failed to fetch users");
      return await response.json();
    } catch (error) {
      console.error("Error fetching users:", error);
      throw error;
    }
  };
  
  export const fetchPosts = async () => {
    try {
      const response = await fetch("https://ubt.podemarketing.com/wp-json/wp/v2/posts?_embed");
      if (!response.ok) throw new Error("Failed to fetch posts");
      return await response.json();
    } catch (error) {
      console.error("Error fetching posts:", error);
      throw error;
    }
  };

  export const fetchPostsByAuthor = async (authorId) => {
    try {
      const response = await fetch(`https://ubt.podemarketing.com/wp-json/wp/v2/posts?author=${authorId}&_embed`);
      if (!response.ok) throw new Error("Failed to fetch posts by author");
      return await response.json();
    } catch (error) {
      console.error("Error fetching posts by author:", error);
      throw error;
    }
  };
  