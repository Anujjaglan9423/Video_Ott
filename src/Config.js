//Development Server
const baseURL =
  "http://20.228.184.53/PROJECTS/TxtGhana/savoplus/client-apis/public/api";

//Production Server
const GetAccessToken = () => {
  // const user = localStorage.getItem("user")
  //   ? JSON.parse(localStorage.getItem("user"))
  //   : null;
  const user = null;

  if (user) return user.accessToken;

  return null;
};

const Config = {
  AxiosConfig: {
    headers: {
      authorization: `Bearer ${GetAccessToken()}`,
    },
  },
  // RegisterApi: baseURL + "/register",
  RegisterApi: baseURL + "/register",
  LoginApi: baseURL + "/login",
  VerifyOtpApi: baseURL + "/verifyOtp",
  ResendApi: baseURL + "/resendOtp",

  // ProfileApi: baseURL + "/profile",
  // GetDoctorsList: baseURL + "/getdoctors",

  GetVideoList: "http://health.salaam.af/MEDIA/",
  ImageBasePath: "http://health.salaam.af/MEDIA/images/",
  DoctorImageBasePath: "http://health.salaam.af/MEDIA/doctors/",
};

export const PaginationLimit = 10;

export default Config;
