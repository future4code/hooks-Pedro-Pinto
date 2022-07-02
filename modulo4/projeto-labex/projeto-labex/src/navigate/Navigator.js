export const goToHome = (navigate) => {
    navigate("/")
}

export const goToCreateTrip = (navigate) => {
    navigate ("/admin/trips/create")
}

 export const goToTravels = (navigate) => {
    navigate("/trips/list")
}


 export const goToAdminPage = (navigate) => {
    navigate("/login")
}    

export const goToTripDetails = (navigate) => {
    navigate(`/admin/trips/${localStorage.getItem ("tripId")}`)
}

export const goToAplicationFormPage = (navigate) => {
    navigate("/trips/application")
 }

export const gotToPrivateArea = (navigate) => {
    const token = localStorage.getItem("token")

    if(token === null) {
        navigate("/login")
    }
    else{
        navigate ("/admin/trips/list")
    }

 }

