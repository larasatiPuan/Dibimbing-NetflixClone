import { useEffect } from "react";
import { useNavigate } from "react-router-dom";

export default function AuthCallback() {
  const navigate = useNavigate();

  useEffect(() => {
    const params = new URLSearchParams(window.location.search);
    const requestToken = params.get("request_token");

    if (!requestToken) {
      console.log("NO REQUEST TOKEN");
      return;
    }

    fetch("https://api.themoviedb.org/3/authentication/session/new", {
      method: "POST",
      headers: {
        accept: "application/json",
        "content-type": "application/json",
        Authorization: `Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiIwNTMzMTMzYTBiY2YwY2UzMjBhMzUzMzJmNzdiZDVkZiIsIm5iZiI6MTc2NzAyMTAxNi44MDcwMDAyLCJzdWIiOiI2OTUyOTlkODQ2NmMzOTY2Yjk3MGZhMjgiLCJzY29wZXMiOlsiYXBpX3JlYWQiXSwidmVyc2lvbiI6MX0.swM4phsAYMyYukkr8T_idMWhkZ3jBwh0f1KIjywmZ2g`
      },
      body: JSON.stringify({
        request_token: requestToken
      })
    })
      .then(res => res.json())
      .then(data => {
        console.log("SESSION RESPONSE:", data);

        if (data.success) {
          localStorage.setItem("session_id", data.session_id);
          navigate("/profile");
        } else {
          console.error("SESSION FAILED:", data);
        }
      })
      .catch(err => console.error(err));
  }, []);

  return <p className="text-white">Logging you in...</p>;
}
