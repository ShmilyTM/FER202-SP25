const About = () => {
	return (
		<div className="container d-flex flex-column align-items-center justify-content-center mt-4">
			<h6 className="display-6">Giới thiệu dụ án FERTECH</h6>
			<div className="container d-flex flex-column align-items-center justify-content-center mt-5 mb-5">
				<div className="row align-items-center justify-content-center">
					<div className="col-md-4 d-flex flex-column align-items-center justify-content-center">
						<img src='/images/logo512.png' alt="Logo" className="img-fluid" />
					</div>
					<div className="col-md-6 align-items-center justify-content-center">
						<p className="lead">
							<strong>FERTECH</strong> là một dự án phát triển web độc đáo tập
							trung vào việc quản lý và theo dõi laptop một cách hiệu quả trong
							hệ thống quản lý kho.
						</p>
						<p className="lead">Tổng quan về Công nghệ:</p>
						<ul className="lead">
							<li>
								<strong>React</strong>: Thư viện JavaScript để xây dựng giao
								diện người dùng.
							</li>
						</ul>
					</div>
				</div>
			</div>
			 <div className="container d-flex flex-column align-items-center justify-content-center mt-2">
				<h6 className="display-6 mb-4">Thành viên</h6>
			 	<a href="https://github.com/ShmilyTM/FER202-SP25.git">
					<img src="https://scontent.fsgn2-9.fna.fbcdn.net/v/t39.30808-6/330901030_572008871508677_6687838125936982838_n.jpg?_nc_cat=103&ccb=1-7&_nc_sid=a5f93a&_nc_eui2=AeGQkDFt4KtVPLBEn1VaslizD6JCLUP7axkPokItQ_trGWE13nCkPhnTkbdmHKuYrT1hocW3a1Q3T7OjCLKBPKbO&_nc_ohc=NIC8nwVyP_oQ7kNvgH6QKn2&_nc_oc=Adhj689m4khrJaVGxz7inFNkMymIC3KY4JrHOTc79ln-tLLsoks-9qi5pU1shZgFiXM&_nc_zt=23&_nc_ht=scontent.fsgn2-9.fna&_nc_gid=mk7fN9zoFdbDq_MlK6JRrg&oh=00_AYENbQx0BanQvjTl4bBTX8RCwg9k7EM7d5IbHYds_J9yVw&oe=67DF1057" />
				</a>
			</div>
		</div>
	);
};

export default About;
