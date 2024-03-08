"use client";

import React, { useState } from "react";
import MyBox from "../common/MyBox";
import { searchUser } from "../services/searchUser";
import MyText from "../common/MyText";
import MyButton from "../common/MyButton";
import { useDispatch } from "react-redux";
import { addUser } from "../action/action";

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

  const dispatch = useDispatch();

  async function addUserToIndex(user) {
    console.log(user);
    dispatch(addUser(user));
  }

  return (
    <MyBox className={"p-4 w-[80%] flex flex-col rounded-2xl"} isPrimary={true}>
      <input
        variant="outlined"
        placeholder="search ..."
        value={inputValue}
        onChange={handleChange}
        className="w-full p-3 bg-[none] rounded border border-gray-400"
      />

      {/* result list */}
      <>
        {results.length > 0
          ? results.map((result, index) => {
              return (
                <div
                  key={index}
                  className="mt-3 flex justify-between items-center"
                >
                  <div>
                    <MyText className={"pt-3 font-semibold text-xl"}>
                      @{result.user.username}
                    </MyText>
                    <MyText className={"text-sm"}>
                      {result.user.displayName}
                    </MyText>
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
              );
            })
          : // Display "No Results Found" only if there are no results and no error
            !results.length && <MyText>No Results Found</MyText>}
      </>
    </MyBox>
  );
};

export default AddUserModel;
