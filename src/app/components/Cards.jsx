import React from "react";

const cardsData = [
    { id: 1, image: "/amazaon.jpg", title: "Amazon Clone", description: "This is a multi-page application but not responsive.", link: "https://amazon-clone-tau-silk.vercel.app/" },
    { id: 2, image: "/personal fitness.jpg", title: "Personal Fitness Trainer Website", description: "This is a single-page application with responsiveness.", link: "https://personal-fitness-trainer-project.vercel.app/" },
    { id: 3, image: "/Nice Store.jpg", title: "Nice Store E-Commerce Website", description: "This is a multi-page application with responsiveness.", link: "https://multipage-e-commer-website-nice-store.vercel.app/" },
    { id: 4, image: "/Tech Solution.jpg", title: "IT Consulting", description: "This is a single-page responsive website.", link: "https://it-consulting-responsive-website.vercel.app/" },
    { id: 5, image: "/parallex.jpg", title: "Parallax Website", description: "This is a single-page responsive application.", link: "https://parallax-website-single-page-application.vercel.app/" },
    { id: 6, image: "/dnk.jpg", title: "DNK Store", description: "This is a multi-page website.", link: "https://multipage-e-commer-website-dnk.vercel.app/" },
    { id: 7, image: "/admindashboard.jpg", title: "Admin Dashboard", description: "This is a responsive admin dashboard built using JavaScript.", link: "https://java-script-admin-dashboard-gc13.vercel.app/" },
    { id: 8, image: "Task.jpg", title: "Brandsmashers Tech Task", description: "A company task to validate Google Drive URL links using Next.js.", link: "https://task-ecru-rho.vercel.app/" }
  ];
  

const Cards = () => {
  return (
    <div className="container max-w-7xl mx-auto p-6">
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
        {cardsData.map((card) => (
          <a
            key={card.id}
            href={card.link}
            target="_blank"
            rel="noopener noreferrer"
            className="bg-white rounded-2xl shadow-lg overflow-hidden cursor-pointer hover:shadow-2xl transition-shadow duration-300 block"
          >
            <img src={card.image} alt={card.title} className="w-full h-40 px-4 object-cover" />
            <div className="p-4">
              <h3 className="text-lg font-semibold">{card.title}</h3>
              <p className="text-gray-600 mt-2">{card.description}</p>
            </div>
          </a>
        ))}
      </div>
    </div>
  );
};

export default Cards;
