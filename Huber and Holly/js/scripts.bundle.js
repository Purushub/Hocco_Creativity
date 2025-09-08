"use strict";

var ScriptsBundle = ScriptsBundle || {};

$(function() {
    ScriptsBundle = {
        init: function() {
        	ScriptsBundle.instaFeed();
            ScriptsBundle.hamburger();
            //ScriptsBundle.scrollToElement();
            ScriptsBundle.initCarousel();
            ScriptsBundle.scrollAnimation();
            ScriptsBundle.imageLink();
            ScriptsBundle.navTabs();
			ScriptsBundle.choiceRadio();
            ScriptsBundle.ordernowForm();
			ScriptsBundle.locatorSelector();
			ScriptsBundle.statecity();
			
        },

      statecity: function() {
				const stateCityMapping = {
            "Andaman & Nicobar Islands": ["Nicobars", "North and Middle Andaman", "South Andaman"],
            "Andhra Pradesh": ["Anantapur", "Chittoor", "East Godavari", "Guntur", "Krishna", "Kurnool", "Prakasam", "Sri Potti Sriramulu Nellore", "Srikakulam", "Visakhapatnam", "Vizianagaram", "West Godavari", "Y.S.R."],
            "Arunachal Pradesh": ["Anjaw", "Changlang", "Dibang Valley", "East Kameng", "East Siang", "Kra Daadi", "Kurung Kumey", "Lohit", "Lower Dibang Valley", "Lower Siang", "Lower Subansiri", "Namsai", "Papum Pare", "Siang", "Tawang", "Tirap", "Upper Siang", "Upper Subansiri", "West Kameng", "West Siang"],
            "Assam": ["Baksa", "Barpeta", "Biswanath", "Bongaigaon", "Cachar", "Charaideo", "Chirang", "Darrang", "Dhemaji", "Dhubri", "Dibrugarh", "Dima Hasao", "Goalpara", "Golaghat", "Hailakandi", "Hojai", "Jorhat", "Kamrup", "Kamrup Metropolitan", "Karbi Anglong", "Karimganj", "Kokrajhar", "Lakhimpur", "Majuli", "Morigaon", "Nagaon", "Nalbari", "Sivasagar", "Sonitpur", "South Salamara-Mankachar", "Tinsukia", "Udalguri", "West Karbi Anglong"],
            "Bihar": ["Araria", "Arwal", "Aurangabad", "Banka", "Begusarai", "Bhagalpur", "Bhojpur", "Buxar", "Darbhanga", "Gaya", "Gopalganj", "Jamui", "Jehanabad", "Kaimur (Bhabua)", "Katihar", "Khagaria", "Kishanganj", "Lakhisarai", "Madhepura", "Madhubani", "Munger", "Muzaffarpur", "Nalanda", "Nawada", "Pashchim Champaran", "Patna", "Purbi Champaran", "Purnia", "Rohtas", "Saharsa", "Samastipur", "Saran", "Sheikhpura", "Sheohar", "Sitamarhi", "Siwan", "Supaul", "Vaishali"],
            "Chandigarh": ["Chandigarh"],
            "Chhattisgarh": ["Balod", "Baloda Bazar", "Balrampur", "Bastar", "Bemetara", "Bijapur", "Bilaspur", "Dakshin Bastar Dantewada", "Dhamtari", "Durg", "Gariyaband", "Janjgir - Champa", "Jashpur", "Kabeerdham", "Kondagaon", "Korba", "Koriya", "Mahasamund", "Mungeli", "Narayanpur", "Raigarh", "Raipur", "Rajnandgaon", "Sukma", "Surajpur", "Surguja", "Uttar Bastar Kanker"],
            "Dadra & Nagar Haveli": ["Dadra and Nagar Haveli"],
            "Daman And Diu": ["Daman", "Diu"],
            "Goa": ["North Goa", "South Goa"],
            "Gujarat": ["Ahmedabad", "Amreli", "Anand", "Arvalli", "Banas Kantha", "Bharuch", "Bhavnagar", "Botad", "Chhota Udepur", "Devbhoomi Dwarka", "Dohad", "Gandhinagar", "Gir Somnath", "Jamnagar", "Junagadh", "Kachchh", "Kheda", "Mahesana", "Mahisagar", "Morbi", "Narmada", "Navsari", "Panch Mahals", "Patan", "Porbandar", "Rajkot", "Sabar Kantha", "Surat", "Surendranagar", "Tapi", "The Dangs", "Vadodara", "Valsad"],
            "Haryana": ["Ambala", "Bhiwani", "Charkhi Dadri", "Faridabad", "Fatehabad", "Gurgaon", "Hisar", "Jhajjar", "Jind", "Kaithal", "Karnal", "Kurukshetra", "Mahendragarh", "Mewat", "Palwal", "Panchkula", "Panipat", "Rewari", "Rohtak", "Sirsa", "Sonipat", "Yamunanagar"],
            "Himachal Pradesh": ["Bilaspur", "Chamba", "Hamirpur", "Kangra", "Kinnaur", "Kullu", "Lahul Spiti", "Mandi", "Shimla", "Sirmaur", "Solan", "Una"],
            "Jammu and Kashmir": ["Anantnag", "Badgam", "Bandipore", "Baramula", "Doda", "Ganderbal", "Jammu", "Kargil", "Kathua", "Kishtwar", "Kulgam", "Kupwara", "Leh(Ladakh)", "Pulwama", "Punch", "Rajouri", "Ramban", "Reasi", "Samba", "Shupiyan", "Srinagar", "Udhampur"],
            "Jharkhand": ["Bokaro", "Chatra", "Deoghar", "Dhanbad", "Dumka", "Garhwa", "Giridih", "Godda", "Gumla", "Hazaribagh", "Jamtara", "Khunti", "Kodarma", "Latehar", "Lohardaga", "Pakur", "Palamu", "Pashchimi Singhbhum", "Purbi Singhbhum", "Ramgarh", "Ranchi", "Sahibganj", "Saraikela-Kharsawan", "Simdega"],
            "Karnataka": ["Bagalkot", "Bangalore", "Bangalore Rural", "Belgaum", "Bellary", "Bidar", "Bijapur", "Chamarajanagar", "Chikkaballapura", "Chikmagalur", "Chitradurga", "Dakshina Kannada", "Davanagere", "Dharwad", "Gadag", "Gulbarga", "Hassan", "Haveri", "Kodagu", "Kolar", "Koppal", "Mandya", "Mysore", "Raichur", "Ramanagara", "Shimoga", "Tumkur", "Udupi", "Uttara Kannada", "Yadgir"],
            "Kerala": ["Alappuzha", "Ernakulam", "Idukki", "Kannur", "Kasaragod", "Kollam", "Kottayam", "Kozhikode", "Malappuram", "Palakkad", "Pathanamthitta", "Thiruvananthapuram", "Thrissur", "Wayanad"],
            "Lakshadweep": ["Lakshadweep"],
            "Madhya Pradesh": ["Agar Malwa", "Alirajpur", "Anuppur", "Ashoknagar", "Balaghat", "Barwani", "Betul", "Bhind", "Bhopal", "Burhanpur", "Chhatarpur", "Chhindwara", "Damoh", "Datia", "Dewas", "Dhar", "Dindori", "Guna", "Gwalior", "Harda", "Hoshangabad", "Indore", "Jabalpur", "Jhabua", "Katni", "Khandwa (East Nimar)", "Khargone (West Nimar)", "Mandla", "Mandsaur", "Morena", "Narsimhapur", "Neemuch", "Panna", "Raisen", "Rajgarh", "Ratlam", "Rewa", "Sagar", "Satna", "Sehore", "Seoni", "Shahdol", "Shajapur", "Sheopur", "Shivpuri", "Sidhi", "Singrauli", "Tikamgarh", "Ujjain", "Umaria", "Vidisha"],
            "Maharashtra": ["Ahmadnagar", "Akola", "Amravati", "Aurangabad", "Bhandara", "Bid", "Buldana", "Chandrapur", "Dhule", "Gadchiroli", "Gondiya", "Hingoli", "Jalgaon", "Jalna", "Kolhapur", "Latur", "Mumbai", "Mumbai Suburban", "Nagpur", "Nanded", "Nandurbar", "Nashik", "Osmanabad", "Palghar", "Parbhani", "Pune", "Raigarh", "Ratnagiri", "Sangli", "Satara", "Sindhudurg", "Solapur", "Thane", "Wardha", "Washim", "Yavatmal"],
            "Manipur": ["Bishnupur", "Chandel", "Churachandpur", "Imphal East", "Imphal West", "Jiribam", "Kakching", "Kamjong", "Kangpokpi", "Noney", "Pherzawl", "Senapati", "Tamenglong", "Tengnoupal", "Thoubal", "Ukhrul"],
            "Meghalaya": ["East Garo Hills", "East Jaintia Hills", "East Khasi Hills", "Jaintia Hills", "North Garo Hills", "Ribhoi", "South Garo Hills", "South West Garo Hills", "South West Khasi Hills", "West Garo Hills", "West Jaintia Hills", "West Khasi Hills"],
            "Mizoram": ["Aizawl", "Champhai", "Kolasib", "Lawngtlai", "Lunglei", "Mamit", "Saiha", "Serchhip"],
            "Nagaland": ["Dimapur", "Kiphire", "Kohima", "Longleng", "Mokokchung", "Mon", "Peren", "Phek", "Tuensang", "Wokha", "Zunheboto"],
            "Nct Of Delhi": ["Central", "East", "New Delhi", "North", "North East", "North West", "Shahdara", "South", "South East Delhi", "South West", "West"],
            "Odisha": ["Anugul", "Balangir", "Baleshwar", "Bargarh", "Baudh", "Bhadrak", "Cuttack", "Debagarh", "Dhenkanal", "Gajapati", "Ganjam", "Jagatsinghapur", "Jajapur", "Jharsuguda", "Kalahandi", "Kandhamal", "Kendrapara", "Kendujhar", "Khordha", "Koraput", "Malkangiri", "Mayurbhanj", "Nabarangapur", "Nayagarh", "Nuapada", "Puri", "Rayagada", "Sambalpur", "Subarnapur", "Sundargarh"],
            "Puducherry": ["Karaikal", "Mahe", "Puducherry", "Yanam"],
            "Punjab": ["Amritsar", "Barnala", "Bathinda", "Faridkot", "Fatehgarh Sahib", "Fazilka", "Firozpur", "Gurdaspur", "Hoshiarpur", "Jalandhar", "Kapurthala", "Ludhiana", "Mansa", "Moga", "Muktsar", "Pathankot", "Patiala", "Rupnagar", "Sahibzada Ajit Singh Nagar", "Sangrur", "Shahid Bhagat Singh Nagar", "Tarn Taran"],
            "Rajasthan": ["Ajmer", "Alwar", "Banswara", "Baran", "Barmer", "Bharatpur", "Bhilwara", "Bikaner", "Bundi", "Chittaurgarh", "Churu", "Dausa", "Dhaulpur", "Dungarpur", "Hanumangarh", "Jaipur", "Jaisalmer", "Jalor", "Jhalawar", "Jhunjhunun", "Jodhpur", "Karauli", "Kota", "Nagaur", "Pali", "Pratapgarh", "Rajsamand", "Sawai Madhopur", "Sikar", "Sirohi", "Sri Ganganagar", "Tonk", "Udaipur"],
            "Sikkim": ["East District", "North  District", "South District", "West District"],
            "Tamil Nadu": ["Ariyalur", "Chennai", "Coimbatore", "Cuddalore", "Dharmapuri", "Dindigul", "Erode", "Kancheepuram", "Kanniyakumari", "Karur", "Krishnagiri", "Madurai", "Nagapattinam", "Namakkal", "Perambalur", "Pudukkottai", "Ramanathapuram", "Salem", "Sivaganga", "Thanjavur", "The Nilgiris", "Theni", "Thiruvallur", "Thiruvarur", "Thoothukkudi", "Tiruchirappalli", "Tirunelveli", "Tiruppur", "Tiruvannamalai", "Vellore", "Viluppuram", "Virudhunagar"],
            "Telangana": ["Adilabad", "Bhadradri", "Hyderabad", "Jagtial", "Jangaon", "Jayashankar", "Jogulamba", "Kamareddy", "Karimnagar", "Khammam", "Komaram Bheem", "Mahabubabad", "Mahbubnagar", "Mancherial", "Medak", "Medchal-Malkajgiri", "Nagarkurnool", "Nalgonda", "Nirmal", "Nizamabad", "Peddapalli", "Rajanna", "Rangareddy", "Sangareddy", "Siddipet", "Suryapet", "Vikarabad", "Wanaparthy", "Warangal Rural", "Warangal Urban", "Yadadri"],
            "Tripura": ["Dhalai", "Gomati", "Khowai", "North Tripura", "Sepahijala", "South Tripura", "Unakoti", "West Tripura"],
            "Uttar Pradesh": ["Agra", "Aligarh", "Allahabad", "Ambedkar Nagar", "Amethi", "Amroha", "Auraiya", "Azamgarh", "Baghpat", "Bahraich", "Ballia", "Balrampur", "Banda", "Bara Banki", "Bareilly", "Basti", "Bhadohi", "Bijnor", "Budaun", "Bulandshahr", "Chandauli", "Chitrakoot", "Deoria", "Etah", "Etawah", "Faizabad", "Farrukhabad", "Fatehpur", "Firozabad", "Gautam Buddha Nagar", "Ghaziabad", "Ghazipur", "Gonda", "Gorakhpur", "Hamirpur", "Hapur", "Hardoi", "Hathras", "Jalaun", "Jaunpur", "Jhansi", "Kannauj", "Kanpur Dehat", "Kanpur Nagar", "Kasganj", "Kaushambi", "Kheri", "Kushinagar", "Lalitpur", "Lucknow", "Mahoba", "Mahrajganj", "Mainpuri", "Mathura", "Mau", "Meerut", "Mirzapur", "Moradabad", "Muzaffarnagar", "Pilibhit", "Pratapgarh", "Rae Bareli", "Rampur", "Saharanpur", "Sambhal", "Sant Kabir Nagar", "Shahjahanpur", "Shamli", "Shrawasti", "Siddharthnagar", "Sitapur", "Sonbhadra", "Sultanpur", "Unnao", "Varanasi"],
            "Uttarakhand": ["Almora", "Bageshwar", "Chamoli", "Champawat", "Dehradun", "Garhwal", "Hardwar", "Nainital", "Pithoragarh", "Rudraprayag", "Tehri Garhwal", "Udham Singh Nagar", "Uttarkashi"],
            "West Bengal": ["Alipurduar", "Bankura", "Barddhaman", "Birbhum", "Dakshin Dinajpur", "Darjiling", "Haora", "Hugli", "Jalpaiguri", "Jhargram", "Kalimpong", "Koch Bihar", "Kolkata", "Maldah", "Murshidabad", "Nadia", "North Twenty Four Parganas", "Paschim Bardhaman", "Paschim Medinipur", "Purba Bardhaman", "Purba Medinipur", "Puruliya", "South Twenty Four Parganas", "Uttar Dinajpur"],
        };
        $('#state').change(function () {
            const selectedState = $(this).val();
            const $cityDropdown = $('#city');

            $cityDropdown.empty(); // Clear previous options
            $cityDropdown.append(new Option("Select a City", "")); // Add default option

            if (stateCityMapping[selectedState]) {
                stateCityMapping[selectedState].forEach(function (city) {
                    $cityDropdown.append(new Option(city, city));
                });
            }
        });
          // Disable the submit button on form submission
  $(document).on('submit', '.wpcf7-form', function (e) {
    const $submitButton = $(this).find('input[type="submit"]');

    if ($submitButton.length) {
      $submitButton.prop('disabled', true); // Disable the button
      $submitButton.val('Submitting...'); // Change button text to show loading
    }
  });

  // Re-enable the button after submission
  document.addEventListener('wpcf7mailsent', function (event) {
    const $form = $(event.target);
    const $submitButton = $form.find('input[type="submit"]');

    if ($submitButton.length) {
      $submitButton.prop('disabled', false); // Re-enable the button
      $submitButton.val('Submit'); // Reset button text
    }
  });

  // Handle errors or failures
  document.addEventListener('wpcf7invalid', function (event) {
    const $form = $(event.target);
    const $submitButton = $form.find('input[type="submit"]');

    if ($submitButton.length) {
      $submitButton.prop('disabled', false); // Re-enable button on validation failure
      $submitButton.val('Submit'); // Reset button text
    }
  });

  document.addEventListener('wpcf7mailfailed', function (event) {
    const $form = $(event.target);
    const $submitButton = $form.find('input[type="submit"]');

    if ($submitButton.length) {
      $submitButton.prop('disabled', false); // Re-enable button on mail failure
      $submitButton.val('Submit'); // Reset button text
    }
  });
			},

        instaFeed: function() {
			var feed = new Instafeed({
	            accessToken: 'IGQWROeFdjLTh1MVJ0clNjM2hiNGhycDIwN1R5SG9mT3llZAEppRkJPOGhUX3NlT2lDZAlRUVDkyV3VtWGl1YkZATS0RLM2VSS1JXeHJPdDRJeExzcTFFTkhxRkFxSmNkWExyX2I4NTdUVFlvRDBhR3YwSm9jeWhBZADAZD',
	            template: '<div class="swiper-slide"><a href="{{link}}" target="_blank"><img src="{{image}}" /></a></div>' 

	        });
	        feed.run();
		},
		
		hamburger: function() {
			$('#hamburger').on('click', function() {
				$('.navbar').slideToggle();
			});
		},
		
		scrollToElement: function() {
			$('a[href*="#"]:not([href="#"])').on('click', function() {
				if (location.pathname.replace(/^\//,'') == this.pathname.replace(/^\//,'') && location.hostname == this.hostname) {
				  	var target = $(this.hash);
				  	target = target.length ? target : $('[name=' + this.hash.slice(1) +']');
				  	if (target.length) {
						$('html,body').animate({
					  		scrollTop: target.offset().top
						}, 500);
						return false;
				  	}
				}
			});
		},
		
		initCarousel: function() {
			var location = '#location';
			if ($(location).length) {
				var swiperLocation = new Swiper(location, {
  					direction: 'horizontal',
  					loop: false,
					slidesPerView: 1,
  					spaceBetween: 30,
					breakpoints: {
						480: {
							slidesPerView: 1.2,
						},
						580: {
							slidesPerView: 1.5,
						},
						1024: {
							slidesPerView: 2.5,
						}
					}
				});
			}

			var testimonials = '#testimonials';
			if ($(testimonials).length) {
				var swiperLocation = new Swiper(testimonials, {
  					direction: 'horizontal',
  					loop: true,
					slidesPerView: 1,
					autoplay: {
						delay: 3500,
				  	},
				  	navigation: {
						nextEl: '.swiper-button-next',
						prevEl: '.swiper-button-prev',
					},
				});
			}
			
			var card = '#card_swipper';
			if ($(card).length) {
				var swiperCard = new Swiper(card, {
					spaceBetween: 20,

					breakpoints: {
						0: { slidesPerView: 1.5 },
						380: { slidesPerView: 2 },
						480: { slidesPerView: 2.5 },
						768: { slidesPerView: 3.5 },
						992: { slidesPerView: 4.5 },
					},

					navigation: {
						nextEl: '.swiper-button-next',
						prevEl: '.swiper-button-prev',
					},
				});
			}
			
			var cake = '#cake_swipper';
			if ($(cake).length) {
				var swiperCake = new Swiper(cake, {
					spaceBetween: 30,

					breakpoints: {
						0: { slidesPerView: 1.5 },
						768: { slidesPerView: 2.5 },
						992: { slidesPerView: 3.5 },
					},

					navigation: {
						nextEl: '.swiper-button-next',
						prevEl: '.swiper-button-prev',
					},
				});
			}
			
			var toppings = '#toppings';
			if ($(toppings).length) {
				var swiperCake = new Swiper(toppings, {
					spaceBetween: 30,
					slidesPerView: 2,
					slidesPerGroup: 2,
					autoplay: {
						delay: 5000,
				  	},

					breakpoints: {
						480: { slidesPerView: 3, slidesPerGroup: 3 },
						768: { slidesPerView: 4, slidesPerGroup: 4 },
						992: { slidesPerView: 5, slidesPerGroup: 5 },
						1200: { slidesPerView: 6, slidesPerGroup: 6 },
					},

					pagination: {
						el: '.swiper-pagination',
						type: 'bullets',
						clickable: true
				  	},
				});
			}

			var blogslider = '#blog__slider';
			if ($(blogslider).length) {
				var swiperCake = new Swiper(blogslider, {
					spaceBetween: 30,
					slidesPerView: 2,
					slidesPerGroup: 2,
					loop: true,
					autoplay: {
						delay: 5000,
				  	},

					breakpoints: {
						480: { slidesPerView: 1, slidesPerGroup: 1 },
						768: { slidesPerView: 2, slidesPerGroup: 2 },
						992: { slidesPerView: 3, slidesPerGroup: 3 },
					},

					navigation: {
						nextEl: '.swiper-button-next',
						prevEl: '.swiper-button-prev',
					},
				});
			}

			
		},
		
		scrollAnimation: function() {
			AOS.init({
				once: true
			});
		},
		
		imageLink: function() {
			var $link = $('[data-images] a');
			var active = 'active';
			var show = 'show';
			
			$link.on('click', function() {
				var $this = $(this);
				var $parent = $this.parent().parent();
				var $id = $('#' + $parent.data('images'));
				
				$parent.find('a').removeClass(active);
				$this.addClass(active);
				$id.find('li').removeClass(show);
				$id.find('li').eq($this.parent().index()).addClass(show);
			});
		},
		
		navTabs: function() {
			if ($('.nav-tabs').length === 0) {
				return false;
			}
			
			var dataTab = $('[data-tab]');
			var $navLink = $('.nav-tabs .nav-link');
			var active = 'active';
			var show = 'show';
			
			dataTab.on('click', function() {
				var $this = $(this);
				var $tabID = $('#' + $this.data('tab'));
				var $activeTabPane = $('.tab-pane.show');
					
				dataTab.removeClass(active);
				$this.addClass(active);
				$activeTabPane.hide().removeClass(show);
				$tabID.fadeIn(1000).addClass(show);
			});
		},

		locatorSelector: function() {
			var $address = $('.locator__address');
			var $map = $('#locator_map');
			var active = 'active';
			var show = 'show';
			
			$address.on('click', function() {
				var $this = $(this);
				var src = $this.data('iframe');
					
				$address.removeClass(active);
				$this.addClass(active);
				$map.attr('src', src);
			});
		},

		ordernowForm: function() {
        	jQuery.validator.addMethod("lettersonly", function(value, element) {
				return this.optional(element) || /^[a-z\s]+$/i.test(value);
			}, "Name must contain letters and spaces only");
        	$("#ordernow-form").validate({
				rules: {
					flavour: {
						required: true,
					},
					kg: {
						required: true,
					},
					theme: {
						required: true,
					},
					occasion: {
						required: true,
					},

					yourname: {
						required: true,
					},
					yourmessage: {
						required: true,
					},

					recipientname: {
						required: true,
					},
					recipientcity : {
						required: true
					},
					recipientphone: {
						required: true,
						number: true,
						minlength: 10,
						maxlength: 12
					},
					recipientaddress : {
						required: true
					}					
				},
				messages: {
					flavour: {
						required: "Please select flavour"
					},
					kg: {
						required: "Please select kg"
					},
					theme: {
						required: "Please enter theme"
					},
					occasion: {
						required: "Please select occasion"
					},

					yourname: {
						required: "Please enter your name"
					},
					yourmessage: {
						required: "Please enter your message"
					},

					recipientname: {
						required: "Please enter recipient email"
					},
					recipientcity : {
						required: "Please enter recipient city",
					},
					recipientphone: {
						required: "Please enter recipient phone",
						number: "Data entered was not numeric",
						minlength: "The number entered was not 10 digits long",
						maxlength: "The number entered was not 12 digits long"
					},					
					recipientaddress : {
						required: "Please enter recipient company"
					}
					
				}
			});
        },

        choiceRadio: function() {         
	        $("select.form-control" ).change(function() {
				if ($(this).val() == 'Other') {
					$(this).next().show();
				} else {
					$(this).next().hide();
				}
			});	
        	$('.choiceNext').click(function(){
        		var flag = 0;
        		if ($('#choice-2').is(":checked")) {
        			if ($('#flavour').val() == "") {
					   $('#flavourError').show();
					   flag = 1;
					}
					if ($('#kg').val() == "") {
					   $('#kgError').show()
					   flag = 1;
					}
					if ($('#theme').val() == "") {
					   $('#themeError').show();
					   flag = 1;
					}
					if ($('#occasion').val() == "") {
					   $('#occasionError').show();
					   flag = 1;
					}
					
					if (flag == 0) {
						$('html, body').animate({scrollTop: $($(this).attr('href')).offset().top}, 1000);
						$('.customerror').hide();
					}
	        	} else {
	        		$('html, body').animate({scrollTop: $($(this).attr('href')).offset().top}, 1000);
	        	}
	            return false;
	        });
	        $('.cardNext').click(function(){
	        	var flag = 0;
    			if ($('#yourname').val() == "") {
				   $('#yournameError').show();
				   flag = 1;
				}
				if ($('#yourmessage').val() == "") {
				   $('#yourmessageError').show()
				   flag = 1;
				}
				if (flag == 0) {
					$('html, body').animate({scrollTop: $($(this).attr('href')).offset().top}, 1000);
					$('.customerror').hide();
				}
	            return false;
	        });
        	$('.idscroll').click(function(){
	            $('html, body').animate({scrollTop: $($(this).attr('href')).offset().top}, 1000);
	            return false;
	        });
        	if ($('#choice-1').is(":checked")) {
				$('#makeyourcake').fadeOut();
				$('#pickyourcake').fadeIn();	
			} else { 
				$('#pickyourcake').fadeOut();
				$('#makeyourcake').fadeIn();	
			}

			$("#choice-1").change(function(){
		        $('#makeyourcake').fadeOut();
				$('#pickyourcake').fadeIn();
				$('html, body').animate({scrollTop: $('#choices').offset().top}, 1000);
		    });
		    $("#choice-2").change(function(){
		        $('#pickyourcake').fadeOut();
				$('#makeyourcake').fadeIn();
				$('html, body').animate({scrollTop: $('#choices').offset().top}, 1000);
		    });
        },
        
    };
    
    $(document).ready(ScriptsBundle.init);

    $(window).on('load', function() {
        var instafeedslider = '#instafeedslider';
		if ($(instafeedslider).length) {
			var swiperLocation = new Swiper(instafeedslider, {
					direction: 'horizontal',
					loop: false,
				slidesPerView: 1,
					spaceBetween: 30,
				breakpoints: {
					480: {
						slidesPerView: 1,
					},
					768: {
						slidesPerView: 3,
					},
					1024: {
						slidesPerView: 4,
					}
				}
			});
		}
    });
});