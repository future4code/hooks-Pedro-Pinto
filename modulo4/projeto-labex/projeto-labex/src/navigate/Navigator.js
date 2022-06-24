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
