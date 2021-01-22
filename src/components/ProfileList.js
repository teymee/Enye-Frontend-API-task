import React, { useState } from "react";
import axios from "axios";
import { useEffect } from "react";
import Profile from "./Profile";
import "./Profile.css";
import Pagination from "./Pagination";
import LoadingSkeleton from "./skeletons/LoadingSkeleton";
import empty from "./img/empty1.svg";

export default function ProfileList({ profiles, alt }) {
  let [profile, setProfile] = useState([]);
  let [currentPage, setCurrentPage] = useState(1);
  let [postPerPage] = useState(21);
  const [search, setSearch] = useState("");
  let [isLoading, setisLoading] = useState(true);
  let [human, setHuman] = useState("");

  const url = "https://api.enye.tech/v1/challenge/records";

  useEffect(() => {
    const load = async () => {
      setisLoading(true);
      await axios
        .get(url)
        .then((response) => {
          setProfile(response.data.records.profiles);
          // console.log(response.data.records.profiles)
        })
        .catch((error) => {
          console.log(error);
        });

      setisLoading(false);
      return isLoading;
    };

    load();
  }, []);

  let lastPage = currentPage * postPerPage;
  let firstPage = lastPage - postPerPage;
  let currentProfile = profile.slice(firstPage, lastPage);

  const paginate = (pageNumber) => {
    setCurrentPage(pageNumber);
  };

  function searchBar(data) {
    return data
      .filter((data) => data.FirstName.toLowerCase().indexOf(search) > -1)
      .map((profile) => (
        <Profile
          key={profile.Email}
          name={profile.FirstName}
          name2={profile.LastName}
          gender={profile.Gender}
          lat={profile.Latitude}
          long={profile.Longitude}
          creditCard={profile.CreditCardNumber}
          creditCardType={profile.CreditCardType}
          domain={profile.DomainName}
          mac={profile.MacAddress}
          url={profile.URL}
          userName={profile.UserName}
          lastLogin={profile.LastLogin}
          method={profile.PaymentMethod}
          email={profile.Email}
          phone={profile.PhoneNumber}
        />
      ));
  }

  function genderFilter(gender) {
    let data = currentProfile;

    return data
      .filter((data) => data.Gender.toLowerCase() === gender)
      .map((profile) => (
        <Profile
          alt="image"
          key={profile.Email}
          name={profile.FirstName}
          name2={profile.LastName}
          gender={profile.Gender}
          lat={profile.Latitude}
          long={profile.Longitude}
          creditCard={profile.CreditCardNumber}
          creditCardType={profile.CreditCardType}
          domain={profile.DomainName}
          mac={profile.MacAddress}
          url={profile.URL}
          userName={profile.UserName}
          lastLogin={profile.LastLogin}
          method={profile.PaymentMethod}
          email={profile.Email}
          phone={profile.PhoneNumber}
        />
      ));
  }

  return (
    <>
      <nav>
        <h5 className="text-center">
          <strong>ENYE FRONT-END TASK</strong>
        </h5>

        <div className="filters">
        <div className="d-flex justify-content-between">
        
          <select
            name="sele"
            id="input"
            className="form-control col-3"
            onClick={(e) => setHuman(e.target.value)}
          >
            <option value="">Filter By</option>
            <option value="male">Male</option>
            <option value="female">Female</option>
            <option value="prefer to skip">Perfer to skip</option>
          </select>

          <input
            className="search"
            type="search"
            placeholder=" &#x1F50D; Search"
            onChange={(e) => setSearch(e.target.value)}
          />
        </div>
        </div>
        <hr className="hr" />
      </nav>
      <div>
        

        <div className="row ">
          {isLoading && (
            <>
              <LoadingSkeleton />
              <LoadingSkeleton />
              <LoadingSkeleton />
            </>
          )}

          {human !== "" && genderFilter(human)}

          {searchBar(currentProfile)}
          {!isLoading && searchBar(currentProfile) === "" && (
            <div className="empty">
              <img
                src={empty}
                className="img-responsive"
                alt={alt}
              />
              <h6 className="text-center mt-5">
                No Data Corresponds to the Searched Keyword
              </h6>
            </div>
          )}
        </div>

        {searchBar(currentProfile) !== "" && (
          <Pagination
            totalProfile={profile.length}
            postPerPage={postPerPage}
            paginate={paginate}
          
          />
        )}
      </div>
    </>
  );
}