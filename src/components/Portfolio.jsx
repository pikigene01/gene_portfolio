import React, { useState } from "react";

export default function Portfolio() {
  const [selectedProject, setSelectedProject] = useState(null);

  const webApps = [
    { name: "FOST", url: "https://fost.co.zw/", category: "design development" },
    { name: "Dentad Logistics", url: "https://dentadlogistics.co.zw/", category: "design application" },
    { name: "Livewell World", url: "https://livewellworld.org/", category: "design development" },
    { name: "Mukuru Online", url: "https://online.mukuru.com/", category: "design application" },
    { name: "Yahmba", url: "https://yahmba.online/", category: "design development" },
    { name: "Own You", url: "https://ownyou.online/", category: "design application" },
    { name: "Future Plus", url: "https://futureplus.online/", category: "design development" },
    { name: "Brite Cafe", url: "https://britecafe.co.zw/", category: "design development" },
    { name: "Buzer", url: "https://buzer.online/", category: "design application" },
    { name: "Design Ave", url: "https://designave.co.za/", category: "design development" },
    { name: "Bidout Network", url: "https://bidout.net/", category: "design application" },
    { name: "Area 51 Booze", url: "https://area51booze.co.zw/", category: "design development" },
    { name: "Bidout SA", url: "https://bidout.co.za/", category: "design application" },
    { name: "Help Me", url: "https://helpme.co.zw", category: "design development" }
  ];

  const mobileApps = [
    {
      name: "OWNU App",
      playStoreUrl: "https://play.google.com/store/apps/details?id=online.ownyou",
      webUrl: "https://ownyou.online/",
      category: "application development"
    },
    {
      name: "Future Plus App",
      playStoreUrl: "https://play.google.com/store/apps/details?id=com.un.future_app",
      webUrl: "https://futureplus.online/",
      category: "application development"
    },
    {
      name: "Buzzer App",
      playStoreUrl: "#",
      webUrl: "https://buzer.online/",
      category: "application development"
    },
    {
      name: "Yamba App",
      playStoreUrl: "#",
      webUrl: "https://yahmba.online/",
      category: "application development"
    },
    {
      name: "Mukuru Customer App",
      playStoreUrl: "#",
      webUrl: "https://online.mukuru.com/",
      category: "application development"
    },
    {
      name: "Area 51 Booze App",
      playStoreUrl: "#",
      webUrl: "https://area51booze.co.zw/",
      category: "application development"
    }
  ];

  const legacyApps = [
    {
      name: "Clear App",
      image: "/assets/images/portfolio/img7.webp",
      playStoreUrl: "https://play.google.com/store/apps/details?id=com.clearbuildingsolutions.care_app",
      category: "application development"
    },
    {
      name: "Piki Delivery",
      image: "/assets/images/portfolio/img-3.jpg",
      playStoreUrl: "https://apkpure.com/p/com.pikidelivery.pikideliveryapp",
      category: "application development"
    }
  ];

  const closeModal = () => {
    setSelectedProject(null);
  };

  return (
    <div>
      <section
        className="portfolio bg-gray pt-100 pb-100"
        data-scroll-index="3"
      >
        <div className="container">
          <div className="row">
            <div className="col">
              <div className="section-title">
                <div className="main-title">
                  <h4>
                    My <span>Portfolio</span>
                  </h4>
                  <h6>Web Applications & Mobile Apps</h6>
                </div>
              </div>
              <div className="port-filter text-center">
                <ul>
                  <li className="filter-item" data-filter="*">
                    All
                  </li>
                  <li data-filter=".design">Web Applications</li>
                  <li data-filter=".application">Mobile Apps</li>
                  <li data-filter=".development">Development</li>
                </ul>
              </div>
            </div>
          </div>
          
          <div className="row portfolio-section">
            {/* Web Applications */}
            {webApps.map((app, index) => (
              <div key={`web-${index}`} className={`col-lg-4 col-md-6 item ${app.category}`}>
                <div className="portfolio-item">
                  <div style={{ height: '250px', overflow: 'hidden', border: '1px solid #ddd' }}>
                    <iframe
                      src={app.url}
                      style={{
                        width: '100%',
                        height: '100%',
                        border: 'none',
                        transform: 'scale(0.8)',
                        transformOrigin: 'top left',
                        pointerEvents: 'none'
                      }}
                      title={app.name}
                    />
                  </div>
                  <div className="item-overlay">
                    <h6>{app.name}</h6>
                    <div className="icons">
                      <span className="icon">
                        <span className="port-link">
                          <a
                            href="#"
                            onClick={(e) => {
                              e.preventDefault();
                              setSelectedProject({ type: 'web', ...app });
                            }}
                          >
                            <i className="fa fa-search"></i>
                          </a>
                        </span>
                        <a href={app.url} target="_blank" rel="noopener noreferrer">
                          <i className="fas fa-link"></i>
                        </a>
                      </span>
                    </div>
                  </div>
                </div>
              </div>
            ))}

            {/* Mobile Applications */}
            {mobileApps.map((app, index) => (
              <div key={`mobile-${index}`} className={`col-lg-4 col-md-6 item ${app.category}`}>
                <div className="portfolio-item">
                  <div style={{ height: '250px', overflow: 'hidden', border: '1px solid #ddd', display: 'flex', alignItems: 'center', justifyContent: 'center', backgroundColor: '#f8f9fa' }}>
                    <div style={{ textAlign: 'center', padding: '20px' }}>
                      <i className="fas fa-mobile-alt" style={{ fontSize: '60px', color: '#007bff', marginBottom: '10px' }}></i>
                      <h5>{app.name}</h5>
                      <p style={{ fontSize: '12px', color: '#666' }}>Mobile Application</p>
                      <p style={{ fontSize: '10px', color: '#999' }}>Web Version: {app.webUrl}</p>
                    </div>
                  </div>
                  <div className="item-overlay">
                    <h6>{app.name}</h6>
                    <div className="icons">
                      <span className="icon">
                        <span className="port-link">
                          <a href={app.webUrl} target="_blank" rel="noopener noreferrer">
                            <i className="fa fa-search"></i>
                          </a>
                        </span>
                        <a
                          href={app.playStoreUrl}
                          target="_blank"
                          rel="noopener noreferrer"
                        >
                          <i className="fas fa-link"></i>
                        </a>
                      </span>
                    </div>
                  </div>
                </div>
              </div>
            ))}

            {/* Legacy Applications */}
            {legacyApps.map((app, index) => (
              <div key={`legacy-${index}`} className={`col-lg-4 col-md-6 item ${app.category}`}>
                <div className="portfolio-item">
                  <img
                    src={app.image}
                    alt={app.name}
                    style={{ width: '100%', height: '250px', objectFit: 'cover' }}
                  />
                  <div className="item-overlay">
                    <h6>{app.name}</h6>
                    <div className="icons">
                      <span className="icon">
                        <span className="port-link">
                          <a href={app.image}>
                            <i className="fa fa-search"></i>
                          </a>
                        </span>
                        <a
                          target="_blank"
                          href={app.playStoreUrl}
                          rel="noopener noreferrer"
                        >
                          <i className="fas fa-link"></i>
                        </a>
                      </span>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Modal for embedded view */}
      {selectedProject && (
        <div
          style={{
            position: 'fixed',
            top: 0,
            left: 0,
            width: '100%',
            height: '100%',
            backgroundColor: 'rgba(0,0,0,0.8)',
            zIndex: 9999,
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center'
          }}
          onClick={closeModal}
        >
          <div
            style={{
              width: '90%',
              height: '90%',
              backgroundColor: 'white',
              borderRadius: '8px',
              overflow: 'hidden',
              position: 'relative'
            }}
            onClick={(e) => e.stopPropagation()}
          >
            <div style={{ padding: '10px', borderBottom: '1px solid #ddd', display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
              <h5 style={{ margin: 0 }}>{selectedProject.name}</h5>
              <button
                onClick={closeModal}
                style={{
                  background: 'none',
                  border: 'none',
                  fontSize: '20px',
                  cursor: 'pointer',
                  padding: '5px'
                }}
              >
                ×
              </button>
            </div>
            <iframe
              src={selectedProject.url}
              style={{
                width: '100%',
                height: 'calc(100% - 60px)',
                border: 'none'
              }}
              title={selectedProject.name}
            />
          </div>
        </div>
      )}

      <br />
      <br />
      <br />
      <br />
      <br />
    </div>
  );
}
