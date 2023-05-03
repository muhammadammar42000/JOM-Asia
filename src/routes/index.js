import React, { lazy, Suspense } from "react";
import { Routes, Route, Navigate, BrowserRouter } from "react-router-dom";
import Loader from "../loader";
import AdminRoute from "./AdminRoutes";
import SPRoute from "./SPRoutes";
// import firebase from '../admin/components/firebase/firebase'
// import { messaging } from '../admin/components/firebase/firebase'

import instance from "../admin/components/api/api";
import { toast } from "react-toastify";
// import ServiceProviderNew from "../admin/pages/ServiceProviderNew";

// const messaging = firebase.messaging()

const ServiceDetails = lazy(() => {
  return new Promise((resolve) => {
    setTimeout(
      () => resolve(import("../admin/pages/service-provider/serviceDetails")),
      1000
    );
  });
});

const Users = lazy(() => {
  return new Promise((resolve) => {
    setTimeout(() => resolve(import("../admin/pages/user-management")), 1000);
  });
});

const Gamification = lazy(() => {
  return new Promise((resolve) => {
    setTimeout(() => resolve(import("../admin/pages/gamification")), 1000);
  });
});
const Coupon = lazy(() => {
  return new Promise((resolve) => {
    setTimeout(() => resolve(import("../admin/pages/coupon")), 1000);
  });
});
const Notification = lazy(() => {
  return new Promise((resolve) => {
    setTimeout(() => resolve(import("../admin/pages/notification")), 1000);
  });
});
const Home = lazy(() => {
  return new Promise((resolve) => {
    setTimeout(() => resolve(import("../admin/pages/home")), 1000);
  });
});
const Editor = lazy(() => {
  return new Promise((resolve) => {
    setTimeout(() => resolve(import("../admin/pages/editor-choice")), 1000);
  });
});

const Services = lazy(() => {
  return new Promise((resolve) => {
    setTimeout(() => resolve(import("../admin/pages/services")), 1000);
  });
});

const DisabledServices = lazy(() => {
  return new Promise((resolve) => {
    setTimeout(() => resolve(import("../admin/pages/disabledServices")));
  });
});

const ServiceProviderNew = lazy(() => {
  return new Promise((resolve) => {
    setTimeout(
      () => resolve(import("../admin/pages/ServiceProviderNew")),
      1000
    );
  });
});

const Images360 = lazy(() => {
  return new Promise((resolve) => {
    setTimeout(() => resolve(import("../admin/pages/360images")), 1000);
  });
});
const Booking = lazy(() => {
  return new Promise((resolve) => {
    setTimeout(() => resolve(import("../admin/pages/booking")), 1000);
  });
});
const Utilities = lazy(() => {
  return new Promise((resolve) => {
    setTimeout(() => resolve(import("../admin/pages/utilities")), 1000);
  });
});
const Request = lazy(() => {
  return new Promise((resolve) => {
    setTimeout(() => resolve(import("../admin/pages/request")), 1000);
  });
});
const Sliders = lazy(() => {
  return new Promise((resolve) => {
    setTimeout(() => resolve(import("../admin/pages/sliders")), 1000);
  });
});

const Posts = lazy(() => {
  return new Promise((resolve) => {
    setTimeout(() => resolve(import("../admin/pages/allPosts")), 1000);
  });
});

const Profile = lazy(() => {
  return new Promise((resolve) => {
    setTimeout(() => resolve(import("../admin/pages/profile")), 1000);
  });
});

const WelcomeSP = lazy(() => {
  return new Promise((resolve) => {
    setTimeout(
      () => resolve(import("../service-provider/pages/Welcome")),
      2000
    );
  });
});
const HomeSP = lazy(() => {
  return new Promise((resolve) => {
    setTimeout(() => resolve(import("../service-provider/pages/Home")), 1000);
  });
});
const ServiceSP = lazy(() => {
  return new Promise((resolve) => {
    setTimeout(
      () => resolve(import("../service-provider/pages/Service")),
      1000
    );
  });
});
const BookingSP = lazy(() => {
  return new Promise((resolve) => {
    setTimeout(
      () => resolve(import("../service-provider/pages/Booking")),
      1000
    );
  });
});
const ProfileSP = lazy(() => {
  return new Promise((resolve) => {
    setTimeout(
      () => resolve(import("../service-provider/pages/Profile")),
      1000
    );
  });
});
const GallerySP = lazy(() => {
  return new Promise((resolve) => {
    setTimeout(
      () => resolve(import("../service-provider/pages/Gallery")),
      1000
    );
  });
});

// const ServiceProviderNew = lazy(() => {
//     return new Promise(resolve => {
//         setTimeout(() => resolve(import('')), 1000);
//     });
// });

export const MyRoutes = () => {
  toast.configure();
  const isLogged = localStorage.getItem("isLogged");

  // React.useEffect(()=>{

  //     if(isLogged === 'admin') {

  //         messaging.requestPermission().then(()=>{
  //           return messaging.getToken();
  //         }).then((data)=>{
  //           localStorage.setItem("fcmtoken", data);
  //           console.log('FCM => ', data)

  //           if(data){
  //               instance.post('admin/registerFcmToken', {fcmToken: data}).then(res => {
  //                 console.log("res", res)
  //               })
  //           }
  //         })
  //         messaging.onMessage(data => {
  //             toast.success(data.data.title, {
  //                 position: "bottom-right",
  //                 autoClose: 8000,
  //                 hideProgressBar: false,
  //                 closeOnClick: true,
  //                 pauseOnHover: true,
  //                 draggable: true,
  //                 progress: undefined,
  //             });
  //         })

  //         // messaging.onMessage((payload) => {
  //         //     console.log('Message received. ', payload);
  //         //     // ...
  //         //   });
  //         // messaging.onBackgroundMessage((payload) => {
  //         //     console.log('Received background message ', payload);

  //         // })
  //         // onMessageListener().then(payload => {
  //         //     // setShow(true);
  //         //     // setNotification({title: payload.notification.title, body: payload.notification.body})
  //         //     console.log(payload);
  //         //   }).catch(err => console.log('failed: ', err));

  //     }

  //   })

  return (
    <BrowserRouter>
      <Suspense fallback={<Loader />}>
        <Routes>
          {/* <Route element={<SPRoute isLogged={isLogged} />}>
                    <Route path="/homesp" element={<HomeSP />} />
                </Route>
                <Route element={<SPRoute isLogged={isLogged} />}>
                    <Route path="/servicesp" element={<ServiceSP />} />
                </Route>
                <Route element={<SPRoute isLogged={isLogged} />}>
                    <Route path="/bookingsp" element={<BookingSP />} />
                </Route>
                <Route element={<SPRoute isLogged={isLogged} />}>
                    <Route path="/profilesp" element={<ProfileSP />} />
                </Route>
                <Route element={<SPRoute isLogged={isLogged} />}>
                    <Route path="/gallerysp" element={<GallerySP />} />
                </Route> */}
          <Route element={<AdminRoute isLogged={isLogged} />}>
            <Route path="/home" element={<Home />} />
          </Route>
          <Route element={<AdminRoute isLogged={isLogged} />}>
            <Route path="/requests" element={<Request />} />
          </Route>
          <Route element={<AdminRoute isLogged={isLogged} />}>
            <Route path="/sliders" element={<Sliders />} />
          </Route>
          <Route element={<AdminRoute isLogged={isLogged} />}>
            <Route path="/services" element={<Services />} />
          </Route>
          <Route element={<AdminRoute isLogged={isLogged} />}>
            <Route path="/disabledServices" element={<DisabledServices />} />
          </Route>
          <Route element={<AdminRoute isLogged={isLogged} />}>
            <Route path="/service-provider" element={<ServiceProviderNew />} />
          </Route>
          <Route element={<AdminRoute isLogged={isLogged} />}>
            <Route path="/gamification" element={<Gamification />} />
          </Route>
          <Route element={<AdminRoute isLogged={isLogged} />}>
            <Route path="/360images" element={<Images360 />} />
          </Route>
          {/* <Route element={<AdminRoute isLogged={isLogged} />}>
                    <Route path="/coupon" element={<Coupon />} />
                </Route> */}
          <Route element={<AdminRoute isLogged={isLogged} />}>
            <Route path="/editor" element={<Editor />} />
          </Route>
          <Route element={<AdminRoute isLogged={isLogged} />}>
            <Route path="/utilities" element={<Utilities />} />
          </Route>

          <Route element={<AdminRoute isLogged={isLogged} />}>
            <Route path="/users" element={<Users />} />
          </Route>

          <Route element={<AdminRoute isLogged={isLogged} />}>
            <Route path="/profile" element={<Profile />} />
          </Route>

          <Route element={<AdminRoute isLogged={isLogged} />}>
            <Route path="/posts" element={<Posts />} />
          </Route>

          {/* <Route element={<AdminRoute isLogged={isLogged} />}>
            <Route path="/profile" element={<UserProfile />} />
          </Route> */}

          {/* <Route element={<AdminRoute isLogged={isLogged} />}>
                        <Route path="/notifications" element={<Notification />} />
                    </Route> */}
          <Route element={<AdminRoute isLogged={isLogged} />}>
            <Route path="/services-details" element={<ServiceDetails />} />
          </Route>
          {!isLogged && <Route path="/" element={<WelcomeSP />} />}
          <Route
            path="*"
            element={
              isLogged === "user" ? (
                <Navigate to="/homesp" replace />
              ) : isLogged === "admin" ? (
                <Navigate to="/home" replace />
              ) : (
                <Navigate to="/" replace />
              )
            }
          />
        </Routes>
      </Suspense>
    </BrowserRouter>
  );
};
