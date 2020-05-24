import React from "react";

const Tweet = ({ tweetId }) => (
  <div
    style={{
      margin: '0.5rem 0',
      padding: '0rem',
    }}
  >
		<>
			<blockquote className="twitter-tweet">
				<p
	        lang="en"
			    dir="ltr"
			  >		
	      Loading Tweet...
			  </p>
			  <a 
			     href={tweetId+"ref_src=twsrc%5Etfw"}
				> </a>
			</blockquote>
	    <script async 
	       src="https://platform.twitter.com/widgets.js"
			   charSet="utf-8">
		  </script>
		</>
  </div>
);

export default Tweet;