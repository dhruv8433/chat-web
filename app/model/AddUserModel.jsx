"use client";

import React, { useState } from "react";
import MyBox from "../common/MyBox";
import { searchUser } from "../services/searchUser";
import MyText from "../common/MyText";
import MyButton from "../common/MyButton";

const AddUserModel = () => {
  const [inputValue, setInputValue] = useState("");
  const [results, setResults] = useState([]);
  const [debouncedSearchFunction, setDebouncedSearchFunction] = useState(null);

  // Function to perform actual search
  async function searchUsername(value) {
    if (value === "" || value === undefined) {
      return;
    }
    try {
      const response = await searchUser({ search: value });
      console.log(response);
      if (response.error === false) {
        setResults(response.data);
      } else {
        setResults([]); // Clear results if error is true
      }
    } catch (error) {
      console.log(error);
    }
  }

  // Handle input change with debouncing
  const handleChange = (e) => {
    const { value } = e.target;
    setInputValue(value);
    // Cancel previous debounce timer
    if (debouncedSearchFunction) {
      clearTimeout(debouncedSearchFunction);
    }
    // Set new debounce timer
    const newDebouncedSearchFunction = setTimeout(() => {
      searchUsername(value);
    }, 2000);
    setDebouncedSearchFunction(newDebouncedSearchFunction);
  };

  async function addUserToIndex(user) {
    console.log(user);
  }

  return (
    <MyBox className={"p-4 w-[80%] flex flex-col"} isPrimary={true}>
      <input
        variant="outlined"
        placeholder="search ..."
        value={inputValue}
        onChange={handleChange}
        className="w-full p-3 bg-[none] rounded"
      />

      {/* result list */}
      <>
        {results.length > 0
          ? results.map((result, index) => (
              <div
                key={index}
                className="mt-3 flex justify-between items-center"
              >
                <div>
                  <MyText className={"pt-3 font-semibold text-xl"}>
                    @{result.username}
                  </MyText>
                  <MyText className={"text-sm"}>{result.displayName}</MyText>
                </div>
                <div>
                  <MyButton
                    isPrimaryButton={true}
                    className={"px-3 rounded-md py-2"}
                    myFunction={() => addUserToIndex(result)}
                  >
                    Add
                  </MyButton>
                </div>
              </div>
            ))
          : // Display "No Results Found" only if there are no results and no error
            !results.length && <MyText>No Results Found</MyText>}
      </>
    </MyBox>
  );
};

export default AddUserModel;
