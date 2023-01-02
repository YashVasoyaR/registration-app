import { useEffect, useState } from "react";
import { Modal } from "react-bootstrap";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate, useParams } from "react-router-dom";
import Button from "../components/Button";
import TextField from "../components/TextField";
import { editStudent } from "./studentSlice";

const EditStudent = () => {
  const params = useParams();
  const dispatch = useDispatch();
  const students = useSelector((store) => store.students);
  console.log("students :>> ", students);
  const navigate = useNavigate();
  const existingStudents = students.filter((data) => data.id == params.id);
  console.log("existingStudents :>> ", existingStudents);
  const {
    photos,
    firstname,
    lastname,
    fathername,
    address,
    mobilenumber,
    gender,
    dob,
    country,
    email,
    url,
  } = existingStudents[0];
  const [values, setValues] = useState({
    photos,
    firstname,
    lastname,
    fathername,
    email,
    address,
    mobilenumber,
    gender,
    dob,
    country,
  });

  const handleEdit = () => {
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
      photos: [],
    });
    dispatch(
      editStudent({
        id: params.id,
        firstname: values.firstname,
        lastname: values.lastname,
        fathername: values.fathername,
        email: values.email,
        address: values.address,
        mobilenumber: values.mobilenumber,
        gender: values.gender,
        dob: values.dob,
        country: values.country,
        photos: values.photos,
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

  const [show, setShow] = useState(false);
  const handleShow = () => setShow(true);
  useEffect(() => {
    handleShow();
  }, []);
  return (
    <>
      <Modal
        show={show}
        className="p-0"
        id="homeFilter"
        aria-labelledby="contained-modal-title-vcenter"
        centered
      >
        <Modal.Body className="p-0">
          <div className="p-4 mx-auto row w-100  justify-content-between">
            <h2 className="px-0 mb-4">Edit Registration List</h2>
            <div className="d-flex flex-column col-sm-6 col-12 px-0 mb-2 pe-sm-2 pe-0">
              <label className="mb-2">First Name</label>
              <input
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
                className="py-2 px-3 form-control"
                type="text"
                placeholder="John"
                value={values.lastname}
                onChange={(e) =>
                  setValues({ ...values, lastname: e.target.value })
                }
              />
            </div>
            <div className="d-flex flex-column col-sm-6 col-12 px-0 mb-2 pe-sm-2 pe-0">
              <label className="mb-2">Father Name</label>
              <input
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
                className="py-2 px-3 form-control"
                type="email"
                placeholder="student@gmail.com"
                value={values.email}
                onChange={(e) =>
                  setValues({ ...values, email: e.target.value })
                }
              />
            </div>

            <div className="d-flex flex-column col-sm-6 col-12 px-0 mb-2 pe-sm-2 pe-0">
              <label className="mb-2">Mobile Number</label>
              <input
                className="py-2 px-3 form-control"
                type="text"
                placeholder="0123456789"
                value={values.mobilenumber}
                onChange={(e) =>
                  setValues({ ...values, mobilenumber: e.target.value })
                }
              />
            </div>
            <div className="d-flex flex-column col-sm-6 col-12 px-0 mb-2">
              <label className="mb-2">Country</label>
              <select
                className="form-select"
                value={values.country}
                onChange={(e) =>
                  setValues({ ...values, country: e.target.value })
                }
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
                  class="form-check-input"
                  type="radio"
                  name="gender"
                  value="Male"
                  checked={values.gender==="Male"}
                  onChange={(e) =>
                    setValues({ ...values, gender: e.target.value })
                  }
                  id="gridRadios1"
                />
                <label class="form-check-label" for="gridRadios1">
                  Male
                </label>
              </div>
              <div class="form-check">
                <input
                  class="form-check-input"
                  type="radio"
                  name="gender"
                  checked={values.gender==="Female"}
                  value="Female"
                  onChange={(e) =>
                    setValues({ ...values, gender: e.target.value })
                  }
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
                onChange={(e) =>
                  setValues({ ...values, address: e.target.value })
                }
              />
            </div>

            <div className="d-flex flex-column col-sm-6 col-12 px-0 mb-2 pe-sm-2 pe-0">
              <label className="mb-2">DOB</label>
              <input
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
                type="file"
                className="form-control"
                multiple
                onChange={handleImageUpload}
                accept="image/*"
              />
            </div>
            <button
              className="py-2 px-6 my-3 btn btn-primary w-25"
              onClick={handleEdit}
            >
              Edit
            </button>
          </div>
        </Modal.Body>
      </Modal>
    </>
  );
};

export default EditStudent;
