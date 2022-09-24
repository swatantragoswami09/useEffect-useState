import axios from "axios";
import React, { useState, useEffect } from "react";

function Search() {
  const [term, setTerm] = useState("");
  const [result, setResult] = useState([]);

  useEffect(() => {
    const search = async () => {
      const { data } = await axios.get("https://en.wikipedia.org/w/api.php", {
        params: {
          action: "query",
          list: "search",
          origin: "*",
          format: "json",
          srsearch: term,
        },
      });
      setResult(data.query.search);
      console.log(result);
    };
    if (term) {
      search();
    }
  }, [term]);
  const renderedResults = result.map((res) => {
    return (
      <div key={res.pageid} className="item">
        <div className="content">
          <div className="header">{res.title}</div>
        </div>
        <span dangerouslySetInnerHTML={{ __html: res.snippet }}></span>
      </div>
    );
  });

  return (
    <div>
      <div className="ui form">
        <div className="field">
          <label>Enter Search Term</label>
          <input
            value={term}
            onChange={(e) => setTerm(e.target.value)}
            className="input"
          />
        </div>
      </div>
      <div className="ui celled list">{renderedResults}</div>
    </div>
  );
}

export default Search;
