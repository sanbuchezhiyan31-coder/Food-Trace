import { useEffect, useState, type FormEvent } from "react";
import DashboardLayout from "../../../layouts/DashboardLayout/DashboardLayout";
import api from "../../../services/api";
import "./CustomerProfile.css";

type ProfileData = {
  id: number;
  username: string;
  email: string;
  role: string;
  phone: string;
  address: string;
};

function CustomerProfile() {
  const [profile, setProfile] = useState<ProfileData | null>(null);
  const [loading, setLoading] = useState(true);
  const [saving, setSaving] = useState(false);
  const [error, setError] = useState("");
  const [message, setMessage] = useState("");

  useEffect(() => {
    api
      .get("profile/")
      .then((res) => setProfile(res.data))
      .catch(() => setError("Could not load profile. Is the backend running?"))
      .finally(() => setLoading(false));
  }, []);

  const handleChange = (field: keyof ProfileData, value: string) => {
    if (!profile) return;
    setProfile({ ...profile, [field]: value });
  };

  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault();
    if (!profile) return;
    setSaving(true);
    setMessage("");
    try {
      await api.put("profile/", {
        email: profile.email,
        phone: profile.phone,
        address: profile.address,
      });
      setMessage("Profile updated successfully.");
    } catch {
      setError("Could not update profile.");
    } finally {
      setSaving(false);
    }
  };

  return (
    <DashboardLayout>
      <div className="customer-profile">
        <h1>My Profile</h1>

        {loading && <p>Loading...</p>}
        {error && <p className="error">{error}</p>}
        {message && <p className="success">{message}</p>}

        {profile && (
          <form className="profile-form" onSubmit={handleSubmit}>
            <label>
              Username
              <input type="text" value={profile.username} disabled />
            </label>

            <label>
              Role
              <input type="text" value={profile.role} disabled />
            </label>

            <label>
              Email
              <input
                type="email"
                value={profile.email}
                onChange={(e) => handleChange("email", e.target.value)}
              />
            </label>

            <label>
              Phone
              <input
                type="text"
                value={profile.phone || ""}
                onChange={(e) => handleChange("phone", e.target.value)}
              />
            </label>

            <label>
              Address
              <textarea
                value={profile.address || ""}
                onChange={(e) => handleChange("address", e.target.value)}
              />
            </label>

            <button type="submit" disabled={saving}>
              {saving ? "Saving..." : "Save Changes"}
            </button>
          </form>
        )}
      </div>
    </DashboardLayout>
  );
}

export default CustomerProfile;
