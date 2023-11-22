 /* const handleSave = async () => {
    try {
      // Make a POST request to save data
      const response = await fetch("http://192.168.41.54:3000/api/inter/add", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      });

      if (response.ok) {
        // Parse and log the saved data
        const savedData = await response.json();
        console.log("Data saved successfully:", savedData);

        // Update the reclamation status to "cloturé"
        const reclamationId = savedData.reclamationId; // Update with the correct property name
        const newEtat = "cloturé";

        // Make a request to update the reclamation status on the server
        const statusUpdateResponse = await fetch(
          `http://192.168.41.54:3000/api/rec/update-reclamation-status/${reclamationId}/${newEtat}`,
          {
            method: "PUT",
            headers: {
              "Content-type": "application/json",
            },
          }
        );

        if (statusUpdateResponse.ok) {
          // Log the updated status
          const updatedStatusData = await statusUpdateResponse.json();
          console.log("Status updated:", updatedStatusData.reclamation.etat);
        } else {
          // Handle the case where the server request to update status is not successful
          console.error(
            "Error updating reclamation status:",
            statusUpdateResponse.status
          );
          // You can handle this error, show an error message, or perform other actions
        }

        // Handle the success, e.g., navigate to another screen
        setShowModal(false);
        setFormVisible(false);
        navigation.navigate("Profile");
      } else {
        const errorData = await response.json(); // Parse the error response
        console.error("Error saving data:", errorData.error);
        // Handle the error as needed
      }
    } catch (error) {
      console.error("Error:", error);
      console.error("Response status:", error.status);
    }
  };

  useEffect(() => {
    // Exemple de chargement des réclamations depuis une API
    const fetchReclamations = async () => {
      try {
        const response = await fetch(
          "http://192.168.41.54:3000/api/rec/assigned-reclamations"
        );
        const data = await response.json();
        setReclamations(data);
      } catch (error) {
        console.error("Erreur lors du chargement des réclamations :", error);
      }
    };

    fetchReclamations();
  }, []);

  const reportButton = async (reclamationId) => {
    try {
      if (!selectedReclamationId) {
        console.error("Reclamation ID is not available");
        return;
      }

      setLoading(true);
      const response = await fetch(
        `http://192.168.41.54:3000/api/rec/reporte/${selectedReclamationId}/reporte`,
        {
          method: "PUT",
          headers: {
            Authorization: `Bearer ${user.token}`,
          },
        }
      );

      if (!response.ok) {
        throw new Error("Network response was not ok");
      }

      const updatedReclamation = await response.json();

      setReclamations((prevReclamations) =>
        prevReclamations.map((reclamation) =>
          reclamation._id === updatedReclamation._id
            ? updatedReclamation
            : reclamation
        )
      );

      ToastAndroid.show("Vous avez reporté la réclamation", ToastAndroid.SHORT);
    } catch (error) {
      console.error("Error:", error);
    } finally {
      setLoading(false);
      setReported(true);
    }
  }; */

  /* const handleButtonReporter = async (ReclamationId) => {
    try {
      // Make a request to update the reclamation status on the server
      const url = `http://192.168.41.54:3000/api/rec/reporte/${ReclamationId}/reporte`;
      console.log("Request URL:", url);

      const response = await fetch(url, {
        method: "PUT",
        headers: {
          Authorization: `Bearer ${userInfo.token}`,
        },
      });

      if (!response.ok) {
        throw new Error("Failed to update reclamation status");
      }

      const data = await response.json();

      console.log("Status updated:", data.reclamation.etat);
    } catch (error) {
      console.error("Error updating reclamation status:", error);
    }
  }; */