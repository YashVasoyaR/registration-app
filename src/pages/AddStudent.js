import { useState } from "react";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import Button from "../components/Button";
import TextField from "../components/TextField";
import { addStudent } from "./studentSlice";

const AddStudent = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const [values, setValues] = useState({
    photos: "",
    firstname: "",
    lastname: "",
    fathername: "",
    email: "",
    address: "",
    mobilenumber: "",
    gender: "",
    dob: "",
    country: "",
    url: "",
  });

  const handleRegister = () => {
    setValues({
      firstname: "",
      email: "",
      lastname: "",
      fathername: "",
      address: "",
      mobilenumber: "",
      gender: "",
      dob: "",
      country: "",
      photos: []
    });
    dispatch(
      addStudent({
        id: new Date().valueOf(),
        firstname: values.firstname,
        lastname: values.lastname,
        fathername: values.fathername,
        email: values.email,
        address: values.address,
        mobilenumber: values.mobilenumber,
        gender: values.gender,
        dob: values.dob,
        country: values.country,
        photos: values.photos
      })
    );
    navigate("/");
  };

  const handleImageUpload = (e) => {
    const tempArr = [];

    [...e.target.files].forEach((file) => {
      console.log("file >>> ", file);

      tempArr.push({
        data: file,
        url: URL.createObjectURL(file),
      });
    });

    setValues({ ...values, photos: tempArr });
  };
  return (
    <>
      <form onSubmit={handleRegister} className="mt-5 mx-auto row w-75 justify-content-between">
        <h1 className="px-0 mb-4">Student Registration</h1>
        <div className="d-flex flex-column col-sm-6 col-12 px-0 mb-2 pe-sm-2 pe-0">
          <label className="mb-2">First Name</label>
          <input
          required
            className="py-2 px-3 form-control"
            type="text"
            placeholder="John"
            value={values.firstname}
            onChange={(e) =>
              setValues({ ...values, firstname: e.target.value })
            }
          />
        </div>
        <div className="d-flex flex-column col-sm-6 col-12 px-0 mb-2">
          <label className="mb-2">Last Name</label>
          <input
          required
            className="py-2 px-3 form-control"
            type="text"
            placeholder="John"
            value={values.lastname}
            onChange={(e) => setValues({ ...values, lastname: e.target.value })}
          />
        </div>
        <div className="d-flex flex-column col-sm-6 col-12 px-0 mb-2 pe-sm-2 pe-0">
          <label className="mb-2">Father Name</label>
          <input
          required
            className="py-2 px-3 form-control"
            type="text"
            placeholder="John"
            value={values.fathername}
            onChange={(e) =>
              setValues({ ...values, fathername: e.target.value })
            }
          />
        </div>
        <div className="d-flex flex-column col-sm-6 col-12 px-0 mb-2">
          <label className="mb-2">Email</label>
          <input
          required
            className="py-2 px-3 form-control"
            type="email"
            placeholder="student@gmail.com"
            value={values.email}
            onChange={(e) => setValues({ ...values, email: e.target.value })}
          />
        </div>
        
        <div className="d-flex flex-column col-sm-6 col-12 px-0 mb-2 pe-sm-2 pe-0">
          <label className="mb-2">Mobile Number</label>
          <input
          required
            className="py-2 px-3 form-control"
            type="text"
            placeholder="0123456789"
            value={values.mobilenumber}
            onChange={(e) =>
              setValues({ ...values, mobilenumber: e.target.value })
            }
            onKeyPress={(event) => {
                        if (!/[0-9]/.test(event.key)) {
                          event.preventDefault();
                        }
                      }}
          />
        </div>
        <div className="d-flex flex-column col-sm-6 col-12 px-0 mb-2">
          <label className="mb-2">Country</label>
          <select
          required
          className="form-select"
            value={values.country}
            onChange={(e) => setValues({ ...values, country: e.target.value })}
          >
            <option hidden value="" selected>
              Select Country
            </option>
            <option value="IND">India</option>
            <option value="USA">USA</option>
          </select>
        </div>
        <div className="d-flex flex-column col-sm-6 col-12 px-0 mb-2 pe-sm-2 pe-0">
          <label className="mb-2">Gender</label>
          <div class="form-check">
            <input
            required
              class="form-check-input"
              type="radio"
              name="gender"
              value="Male"
              onChange={(e) => setValues({ ...values, gender: e.target.value })}
              id="gridRadios1"
            />
            <label class="form-check-label" for="gridRadios1">
              Male
            </label>
          </div>
          <div class="form-check">
            <input
            required
              class="form-check-input"
              type="radio"
              name="gender"
              value="Female"
              onChange={(e) => setValues({ ...values, gender: e.target.value })}
              id="gridRadios2"
            />
            <label class="form-check-label" for="gridRadios2">
              Female
            </label>
          </div>
        </div>
        <div className="d-flex flex-column col-sm-6 col-12 px-0 mb-2 ">
          <label className="mb-2">Address</label>
          <textarea
            className="py-2 px-3 form-control"
            placeholder="address"
            value={values.address}
            onChange={(e) => setValues({ ...values, address: e.target.value })}
          />
        </div>
        
        
        <div className="d-flex flex-column col-sm-6 col-12 px-0 mb-2 pe-sm-2 pe-0">
          <label className="mb-2">DOB</label>
          <input
          required
            className="py-2 px-3 form-control"
            type="date"
            placeholder="01/01/2023"
            value={values.dob}
            onChange={(e) => setValues({ ...values, dob: e.target.value })}
          />
        </div>
        <div className="d-flex flex-column col-sm-6 col-12 px-0 mb-2">
          <label className="mb-2">Upload Photos</label>

          <input
          required
            type="file"
            className="form-control"
            multiple
            onChange={handleImageUpload}
            accept="image/*"
          />
        </div>
        <button type="submit" className="py-2 px-6 my-3 btn btn-primary w-25">
          Reister
        </button>
      </form>
    </>
  );
};

export default AddStudent;
