import { useDispatch, useSelector } from "react-redux";
import { Link, useNavigate } from "react-router-dom";
import Button from "../components/Button";
import { deleteStudent } from "./studentSlice";

const StudentList = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const students = useSelector((store) => store.students);
  console.log("students :>> ", students);
  const handleDelete = (id) => {
    dispatch(deleteStudent({ id }));
  };
  return (
    <>
      <div className="d-flex justify-content-between m-3">
        <h2 className="px-0">Student Registration Table</h2>
        <Link to="/add">
          <button className="btn-primary btn ">Register</button>
        </Link>
      </div>
      <div className="table-wrapper overflow-scroll mx-3">
        <table class="table">
          <thead>
            <tr>
              <th scope="col">Id</th>
              <th scope="col">Photos</th>
              <th scope="col" className="w-25">
                First Name
              </th>
              <th scope="col">Last Name</th>
              <th scope="col">Father Name</th>
              <th scope="col">Email</th>
              <th scope="col">Address</th>
              <th scope="col">Mobile Number</th>
              <th scope="col">Gender</th>
              <th scope="col">DOB</th>
              <th scope="col">Country</th>
              <th scope="col">Edit</th>
              <th scope="col">Delete</th>
            </tr>
          </thead>
          <tbody>
            {students.length > 0 &&
              students.map((data, i) => {
                return (
                  <tr key={i}>
                    <td>{data.id}</td>
                    <td>
                      <div
                        id="carouselExampleControls"
                        className="carousel slide"
                        data-bs-ride="carousel"
                      >
                        <div className="carousel-inner">
                          {data.photos &&
                            data.photos.length > 0 &&
                            data.photos.map((data, i) => {
                              return (
                                <div
                                  className={
                                    i == 0
                                      ? "carousel-item active"
                                      : "carousel-item"
                                  }
                                  data-bs-interval="1000"
                                >
                                  <img
                                    src={data.url}
                                    className="d-block w-100"
                                    height="50"
                                    alt="..."
                                  />
                                </div>
                              );
                            })}
                        </div>
                        <button
                          className="carousel-control-prev"
                          type="button"
                          data-bs-target="#carouselExampleControls"
                          data-bs-slide="prev"
                        >
                          <span
                            className="carousel-control-prev-icon"
                            aria-hidden="true"
                          />
                          <span className="visually-hidden">Previous</span>
                        </button>
                        <button
                          className="carousel-control-next"
                          type="button"
                          data-bs-target="#carouselExampleControls"
                          data-bs-slide="next"
                        >
                          <span
                            className="carousel-control-next-icon"
                            aria-hidden="true"
                          />
                          <span className="visually-hidden">Next</span>
                        </button>
                      </div>
                    </td>
                    <td>{data.firstname}</td>
                    <td>{data.lastname}</td>
                    <td>{data.fathername}</td>
                    <td>{data.email}</td>
                    <td>{data.address}</td>
                    <td>{data.mobilenumber}</td>
                    <td>{data.gender}</td>
                    <td>{data.dob}</td>
                    <td>{data.country}</td>

                    <td
                      role="button"
                      onClick={() => navigate("/edit/" + data.id)}
                    >
                      Edit
                    </td>
                    <td role="button" onClick={() => handleDelete(data.id)}>
                      Delete
                    </td>
                  </tr>
                );
              })}
          </tbody>
        </table>
        {students.length == 0 && (
          <h4 className="w-100 text-center m-5">No Data</h4>
        )}
      </div>
    </>
  );
};

export default StudentList;
