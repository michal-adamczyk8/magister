CREATE TABLE shelter
(
    id           SERIAL        NOT NULL PRIMARY KEY,
    name         VARCHAR(255)  NOT NULL,
    phone_number VARCHAR(50)   NOT NULL,
    email        VARCHAR(250)  NOT NULL,
    nip          VARCHAR(10)   NOT NULL,
    regon        VARCHAR(14)   NOT NULL,
    krs          VARCHAR(10),
    address_id   INT           NOT NULL,
    description  VARCHAR(1000),
    image_path   VARCHAR(4000) NOT NULL,
    website_url  VARCHAR(1000) NOT NULL,
    facebook_url VARCHAR(1000),
    instagram_url VARCHAR(1000),
    twitter_url  VARCHAR(1000),
    bank_account VARCHAR(26),
    swift_code   VARCHAR(50),
    opening_time VARCHAR(255),
    status       VARCHAR(10)   NOT NULL,
    created_by   VARCHAR(255)  NOT NULL,
    created_at   DATE          NOT NULL,
    modified_by  VARCHAR(255),
    modified_at  DATE
);

CREATE TABLE shelter_address
(
    id                 SERIAL       NOT NULL PRIMARY KEY,
    street_name        VARCHAR(255) NOT NULL,
    house_number       VARCHAR(5)   NOT NULL,
    flat_number        VARCHAR(5),
    city               VARCHAR(100) NOT NULL,
    zip_code           VARCHAR(6)   NOT NULL,
    created_by         VARCHAR(255) NOT NULL,
    created_at         DATE         NOT NULL,
    modified_by        VARCHAR(255),
    modified_at        DATE
);

ALTER TABLE shelter
    ADD FOREIGN KEY (address_id) REFERENCES shelter_address (id);

CREATE TABLE pet
(
    id                SERIAL        NOT NULL PRIMARY KEY,
    type              VARCHAR(5)    NOT NULL,
    name              VARCHAR(255)  NOT NULL,
    sex               VARCHAR(10)   NOT NULL,
    race_type         VARCHAR(100),
    birth_year        INT,
    birth_month       INT,
    weight            DECIMAL       NOT NULL,
    admittance_date   DATE          NOT NULL,
    description       VARCHAR(1000),
    found_place       VARCHAR(255),
    image_url         VARCHAR(1000),
    shelter_id        INT           NOT NULL,
    status            VARCHAR(50)   NOT NULL,
    created_by        VARCHAR(255)  NOT NULL,
    created_at        DATE          NOT NULL,
    modified_by       VARCHAR(255),
    modified_at       DATE
);

ALTER TABLE pet
    ADD FOREIGN KEY(shelter_id) REFERENCES shelter (id);

CREATE TABLE app_user
(
  id                        SERIAL        NOT NULL PRIMARY KEY,
  user_id                   VARCHAR(15) 	NOT NULL,
  first_name                VARCHAR(255) 	NOT NULL,
  last_name                 VARCHAR(255) 	NOT NULL,
  user_name                 VARCHAR(255) 	NOT NULL,
  password                  VARCHAR(255) 	NOT NULL,
  email                     VARCHAR(255) 	NOT NULL,
  profile_image_url         VARCHAR(1000),
  last_login_date           DATE,
  last_login_date_display   DATE,
  joined_date               DATE 			    NOT NULL,
  role                      VARCHAR(50) 	NOT NULL,
  is_active                 BOOLEAN,
  is_not_locked             BOOLEAN,
  shelter_id                INT
);

ALTER TABLE app_user
    ADD FOREIGN KEY(shelter_id) REFERENCES shelter (id);

CREATE TABLE email_template
(
  id                        SERIAL        NOT NULL PRIMARY KEY,
  email_template_type       VARCHAR(100)  NOT NULL,
  subject                   VARCHAR(255)  NOT NULL,
  text                      VARCHAR(2550) NOT NULL
);

CREATE TABLE email_sending_history
(
  id                    SERIAL        NOT NULL,
  send_date             DATE          NOT NULL,
  email_from            VARCHAR(255)  NOT NULL,
  email_to              VARCHAR(255)  NOT NULL,
  email_template_type   VARCHAR(255)  NOT NULL,
  was_error             BOOLEAN,
  error_message         VARCHAR(1000)
);

CREATE TABLE taker
(
  id            SERIAL        NOT NULL PRIMARY KEY,
  first_name    VARCHAR(255)  NOT NULL,
  last_name     VARCHAR(255)  NOT NULL,
  status	      VARCHAR(20)   NOT NULL,
  phone_number  VARCHAR(50)   NOT NULL,
  email         VARCHAR(100)  NOT NULL,
  shelter_id    INT           NOT NULL,
  created_by    VARCHAR(255)  NOT NULL,
  created_at    DATE          NOT NULL,
  modified_by   VARCHAR(255),
  modified_at   DATE
);

ALTER TABLE taker
    ADD FOREIGN KEY(shelter_id) REFERENCES shelter (id);

CREATE TABLE taker_pets
(
  takers_id  INT REFERENCES taker (id) ON DELETE CASCADE,
  pets_id    INT REFERENCES pet (id) ON DELETE CASCADE,
  PRIMARY KEY (takers_id, pets_id)
);



CREATE TABLE walk (
  id          SERIAL        NOT NULL,
  date_time   TIMESTAMP     NOT NULL,
  pet_id      INT           NOT NULL,
  user_id     INT           NOT NULL,
  status      VARCHAR(100)  NOT NULL,
  created_by  VARCHAR(255)  NOT NULL,
  created_at  DATE          NOT NULL,
  modified_by VARCHAR(255),
  modified_at DATE,
  PRIMARY KEY (id)
);


ALTER TABLE walk
    ADD FOREIGN KEY(pet_id) REFERENCES pet (id);


ALTER TABLE walk
    ADD FOREIGN KEY(user_id) REFERENCES app_user(id);

alter table taker add column image_url varchar(1000);

INSERT INTO shelter_address (city, street_name, house_number, zip_code, created_by, created_at)
VALUES ('Warszawa', 'ul. Paluch', '2', '01-910', 'admin', CURRENT_DATE);


INSERT INTO shelter_address (city, street_name, house_number, zip_code, created_by, created_at)
VALUES ('Kielce', 'ul. Sciegiennego', '203', '25-098', 'admin', CURRENT_DATE);

INSERT INTO shelter(name,
                    nip,
                    regon,
                    email,
                    phone_number,
                    image_path,
                    description,
                    address_id,
                    website_url,
                    status,
                    created_by,
                    created_at)
VALUES ('Schronisko Na Paluchu',
        '5222584702',
        '017189145',
        'info@napaluchu.waw.pl',
        '22 868-06-34',
        'https://napaluchu.waw.pl/wp-content/themes/paluch/images/logo-1.png',
        'Schronisko dla bezdomych zwirząt',
        1,
        'https://napaluchu.waw.pl/',
        'Aktywne',
        'admin',
        CURRENT_DATE);

INSERT INTO shelter(name,
                    nip,
                    regon,
                    email,
                    phone_number,
                    image_path,
                    description,
                    address_id,
                    website_url,
                    status,
                    created_by,
                    created_at)
VALUES ('Schronisko w Dyminach',
        '5222584702',
        '017189145',
        'schronisko.dyminy@wp.pl',
        '41 361 67 24',
        'http://www.puszatek.pl/img/shelter/rbhO9igp6k2efHvDibhDZVldiq9qTCE-.png',
        'Schronisko dla bezdomych zwierząt',
        2,
        'https://schronisko-dyminy.pl/',
        'Aktywne',
        'admin',
        CURRENT_DATE);


INSERT INTO pet ("type","name",sex,race_type,birth_year,birth_month,weight,admittance_date,description,found_place,shelter_id,status,created_by,created_at,modified_by,modified_at,image_url) VALUES
	 ('Pies','Toffik','Pies','Maltańczykjj',2020,2,1,'2022-02-25','Malusieńki maltanczyk czeka na dobrego właściciela','W lesie',1,'Adoptowany','admin','2022-03-07',NULL,NULL,'https://images.dog.ceo/breeds/whippet/n02091134_19129.jpg'),
	 ('Pies','Dyziek','Pies','Maltańćzyk',2022,4,1,'2022-02-22','','W lesie',2,'Gotowy do adopcji z domu tymczasowego','admin','2022-03-07',NULL,NULL,'https://images.dog.ceo/breeds/finnish-lapphund/mochilamvan.jpg'),
	 ('Pies','Alex','Pies','Wyżeł',1990,12,18.1,'2022-03-01','Bardzo żwywiołowy pies szuka właściela','Przy drodze',2,'Adoptowany','admin','2022-03-07',NULL,NULL,'https://images.dog.ceo/breeds/dane-great/n02109047_33588.jpg'),
	 ('Pies','Maks','Pies','Jamnik',2020,12,18.1,'2022-03-04','Bardzo żwywiołowy pies szuka właściela','Przy drodze',1,'Niekatualne','admin','2022-03-07','admin','2022-05-17','https://images.dog.ceo/breeds/husky/n02110185_9855.jpg'),
	 ('Pies','Roki','Pies','Owczarek niemiecki',2021,1,1,'2022-03-05','Malusieńki maltanczyk czeka na dobrego właściciela','W lesie',2,'Niekatualne','admin','2022-03-07','admin','2022-05-17','https://images.dog.ceo/breeds/deerhound-scottish/n02092002_15165.jpg'),
	 ('Pies','Teddy','Pies','Bokser',2020,12,18.1,'2022-03-02','Bardzo żwywiołowy pies szuka właściela','Przy drodze',1,'Niekatualne','admin','2022-03-07','admin','2022-05-17','https://images.dog.ceo/breeds/terrier-irish/n02093991_2437.jpg'),
	 ('Pies','Fafik','Pies','Mieszaniec husky',2021,4,1,'2022-03-07','Malusieńki maltanczyk czeka na dobrego właściciela','W lesie',1,'Gotowy do adopcji','admin','2022-03-07',NULL,NULL,'https://images.dog.ceo/breeds/husky/n02110185_11783.jpg'),
	 ('Pies','Misza','Pies','Bokser',2021,4,1,'2022-03-07','Malusieńki maltanczyk czeka na dobrego właściciela','W lesie',2,'Gotowy do adopcji','admin','2022-03-07',NULL,NULL,'https://images.dog.ceo/breeds/terrier-westhighland/n02098286_5357.jpg'),
	 ('Pies','Leo','Pies','Wyżeł',2020,12,18.1,'2022-03-07','Bardzo żwywiołowy pies szuka właściela','Przy drodze',2,'Gotowy do adopcji','admin','2022-03-07',NULL,NULL,'https://images.dog.ceo/breeds/waterdog-spanish/20180706_194432.jpg'),
	 ('Pies','Max','Pies','Kundelek',2021,4,1,'2022-03-07','Malusieńki maltanczyk czeka na dobrego właściciela','W lesie',1,'Gotowy do adopcji','admin','2022-03-07',NULL,NULL,'https://images.dog.ceo/breeds/pekinese/n02086079_2073.jpg');
INSERT INTO pet ("type","name",sex,race_type,birth_year,birth_month,weight,admittance_date,description,found_place,shelter_id,status,created_by,created_at,modified_by,modified_at,image_url) VALUES
	 ('Pies','Fado','Pies','Mieszanie juck russel terrier',2020,12,18.1,'2022-03-07','Bardzo żwywiołowy pies szuka właściela','Przy drodze',1,'Gotowy do adopcji','admin','2022-03-07',NULL,NULL,'https://images.dog.ceo/breeds/pembroke/n02113023_16112.jpg'),
	 ('Pies','Riko','Pies','Labrador',2021,4,1,'2022-03-07','Malusieńki maltanczyk czeka na dobrego właściciela','W lesie',2,'Gotowy do adopcji','admin','2022-03-07',NULL,NULL,'https://images.dog.ceo/breeds/tervuren/yoda_on_terrace.jpg'),
	 ('Pies','Hektor','Pies','Owczarek',2020,12,18.1,'2022-03-07','Bardzo żwywiołowy pies szuka właściela','Przy drodze',2,'Gotowy do adopcji','admin','2022-03-07',NULL,NULL,'https://images.dog.ceo/breeds/borzoi/n02090622_4552.jpg'),
	 ('Pies','Laki','Pies','Setter',2021,4,1,'2022-03-07','Malusieńki maltanczyk czeka na dobrego właściciela','W lesie',1,'Gotowy do adopcji','admin','2022-03-07',NULL,NULL,'https://images.dog.ceo/breeds/stbernard/n02109525_7497.jpg'),
	 ('Pies','Puszek','Pies','Amstaff',2020,12,18.1,'2022-03-07','Bardzo żwywiołowy pies szuka właściela','Przy drodze',1,'Gotowy do adopcji','admin','2022-03-07',NULL,NULL,'https://images.dog.ceo/breeds/terrier-norwich/n02094258_1404.jpg'),
	 ('Pies','Kajtek','Pies','Terier',2020,12,18.1,'2022-03-07','Bardzo żwywiołowy pies szuka właściela','Przy drodze',2,'Gotowy do adopcji','admin','2022-03-07',NULL,NULL,'https://images.dog.ceo/breeds/malamute/n02110063_938.jpg'),
	 ('Pies','Fuks','Pies','Owczarek kaukaski',2021,4,1,'2022-03-07','Malusieńki maltanczyk czeka na dobrego właściciela','W lesie',1,'Gotowy do adopcji','admin','2022-03-07',NULL,NULL,'https://images.dog.ceo/breeds/lhasa/n02098413_2308.jpg'),
	 ('Pies','Diego','Pies','Owcarek podhalański',2020,12,18.1,'2022-03-07','Bardzo żwywiołowy pies szuka właściela','Przy drodze',1,'Gotowy do adopcji','admin','2022-03-07',NULL,NULL,'https://images.dog.ceo/breeds/rottweiler/n02106550_2862.jpg'),
	 ('Pies','Harry','Pies','Labrador',2021,4,1,'2022-03-07','Malusieńki maltanczyk czeka na dobrego właściciela','W lesie',2,'Gotowy do adopcji','admin','2022-03-07',NULL,NULL,'https://images.dog.ceo/breeds/finnish-lapphund/mochilamvan.jpg'),
	 ('Pies','Rico','Pies','Sznaucer miniaturowy',2020,12,18.1,'2022-03-07','Bardzo żwywiołowy pies szuka właściela','Przy drodze',2,'Gotowy do adopcji','admin','2022-03-07',NULL,NULL,'https://images.dog.ceo/breeds/dachshund/puppy-1006024_640.jpg');
INSERT INTO pet ("type","name",sex,race_type,birth_year,birth_month,weight,admittance_date,description,found_place,shelter_id,status,created_by,created_at,modified_by,modified_at,image_url) VALUES
	 ('Pies','Hades','Pies','Mieszaniec',2021,4,1,'2022-03-07','Malusieńki maltanczyk czeka na dobrego właściciela','W lesie',1,'Gotowy do adopcji','admin','2022-03-07',NULL,NULL,'https://images.dog.ceo/breeds/hound-english/n02089973_3323.jpg'),
	 ('Pies','Hugo','Pies','Shih tzu',2020,12,18.1,'2022-03-07','Bardzo żwywiołowy pies szuka właściela','Przy drodze',1,'Gotowy do adopcji','admin','2022-03-07',NULL,NULL,'https://images.dog.ceo/breeds/cotondetulear/IMAG1063.jpg'),
	 ('Pies','Emi','Pies','Jamnik',2021,4,1,'2022-03-07','Malusieńki maltanczyk czeka na dobrego właściciela','W lesie',2,'Gotowy do adopcji','admin','2022-03-07',NULL,NULL,'https://images.dog.ceo/breeds/finnish-lapphund/mochilamvan.jpg'),
	 ('Pies','Charlie','Pies','Husky',2020,12,18.1,'2022-03-07','Bardzo żwywiołowy pies szuka właściela','Przy drodze',2,'Gotowy do adopcji','admin','2022-03-07',NULL,NULL,'https://images.dog.ceo/breeds/pug/n02110958_9505.jpg'),
	 ('Pies','Biszkopt','Pies','Bernardyn',2021,4,1,'2022-03-07','Malusieńki maltanczyk czeka na dobrego właściciela','W lesie',1,'Gotowy do adopcji','admin','2022-03-07',NULL,NULL,'https://images.dog.ceo/breeds/malinois/n02105162_9934.jpg'),
	 ('Kot','Shadow','Kot','Europejski',2020,12,18.1,'2022-03-07','Bardzo żwywiołowy pies szuka właściela','Przy drodze',1,'Gotowy do adopcji','admin','2022-03-07',NULL,NULL,'https://cataas.com/cat/618ea5836b97360011fb4191'),
	 ('Kot','Ares','Kot','Europejski',2021,4,1,'2022-03-07','Malusieńki maltanczyk czeka na dobrego właściciela','W lesie',2,'Gotowy do adopcji','admin','2022-03-07',NULL,NULL,'https://cataas.com/cat/595f2809557291a9750ebf37'),
	 ('Kot','Marley','Kot','Europejski',2020,12,18.1,'2022-03-07','Bardzo żwywiołowy pies szuka właściela','Przy drodze',2,'Gotowy do adopcji','admin','2022-03-07',NULL,NULL,'https://cataas.com/cat/5d39a47814ca600011538e4a'),
	 ('Kot','Misiek','Kot','Europejski',2021,4,1,'2022-03-07','Malusieńki maltanczyk czeka na dobrego właściciela','W lesie',1,'Gotowy do adopcji','admin','2022-03-07',NULL,NULL,'https://cataas.com/cat/61009bf7caacc400184f6ae7'),
	 ('Kot','Aleks','Kot','Europejski',2020,12,18.1,'2022-03-07','Bardzo żwywiołowy pies szuka właściela','Przy drodze',1,'Gotowy do adopcji','admin','2022-03-07',NULL,NULL,'https://cataas.com/cat/61009bf8caacc400184f6af3');
INSERT INTO pet ("type","name",sex,race_type,birth_year,birth_month,weight,admittance_date,description,found_place,shelter_id,status,created_by,created_at,modified_by,modified_at,image_url) VALUES
	 ('Kot','Agent','Kot','Europejski',2021,4,1,'2022-03-07','Malusieńki maltanczyk czeka na dobrego właściciela','W lesie',2,'Gotowy do adopcji','admin','2022-03-07',NULL,NULL,'https://cataas.com/cat/619d18dde4f7e000180b1a7e'),
	 ('Kot','Papi','Kot','Europejski',2020,12,18.1,'2022-03-07','Bardzo żwywiołowy pies szuka właściela','Przy drodze',2,'Gotowy do adopcji','admin','2022-03-07',NULL,NULL,'https://cataas.com/cat/61009bfbcaacc400184f6b2f'),
	 ('Kot','Niko','Kot','Europejski',2021,4,1,'2022-03-07','Malusieńki maltanczyk czeka na dobrego właściciela','W lesie',1,'Gotowy do adopcji','admin','2022-03-07',NULL,NULL,'https://cataas.com/cat/61009bf9caacc400184f6aff'),
	 ('Kot','Maniek','Kot','Europejski',2020,12,18.1,'2022-03-07','Bardzo żwywiołowy pies szuka właściela','Przy drodze',1,'Gotowy do adopcji','admin','2022-03-07',NULL,NULL,'https://cataas.com/cat/5ac0b7bb61d533000f42c525'),
	 ('Kot','Bruno','Kot','Europejski',2021,4,1,'2022-03-07','Malusieńki maltanczyk czeka na dobrego właściciela','W lesie',2,'Gotowy do adopcji','admin','2022-03-07',NULL,NULL,'https://cataas.com/cat/595f280e557291a9750ebfa3'),
	 ('Kot','Cezar','Kot','Europejski',2020,12,18.1,'2022-03-07','Bardzo żwywiołowy pies szuka właściela','Przy drodze',2,'Gotowy do adopcji','admin','2022-03-07',NULL,NULL,'https://cataas.com/cat/5a987588d1a1f3000f9707a6'),
	 ('Kot','Rafi','Kot','Europejski',2021,4,1,'2022-03-07','Malusieńki maltanczyk czeka na dobrego właściciela','W lesie',1,'Gotowy do adopcji','admin','2022-03-07',NULL,NULL,'https://cataas.com/cat/59f881e80fbbc42ac6842821'),
	 ('Kot','Bastek','Kot','Europejski',2020,12,18.1,'2022-03-07','Bardzo żwywiołowy pies szuka właściela','Przy drodze',1,'Gotowy do adopcji','admin','2022-03-07',NULL,NULL,'https://cataas.com/cat/595f2810557291a9750ebfcb'),
	 ('Kot','Hachi','Kot','Europejski',2021,4,1,'2022-03-07','Malusieńki maltanczyk czeka na dobrego właściciela','W lesie',2,'Gotowy do adopcji','admin','2022-03-07',NULL,NULL,'https://cataas.com/cat/6136be59ebad510011b54b88'),
	 ('Kot','Kuba','Kot','Europejski',2020,12,18.1,'2022-03-07','Bardzo żwywiołowy pies szuka właściela','Przy drodze',2,'Gotowy do adopcji','admin','2022-03-07',NULL,NULL,'https://cataas.com/cat/61fc002bbc6ac800182c76d9');
INSERT INTO pet ("type","name",sex,race_type,birth_year,birth_month,weight,admittance_date,description,found_place,shelter_id,status,created_by,created_at,modified_by,modified_at,image_url) VALUES
	 ('Kot','Melman','Kot','Europejski',2021,4,1,'2022-03-07','Malusieńki maltanczyk czeka na dobrego właściciela','W lesie',1,'Gotowy do adopcji','admin','2022-03-07',NULL,NULL,'https://cataas.com/cat/610444fae10e000012021118'),
	 ('Kot','Lucjan','Kot','Europejski',2020,12,18.1,'2022-03-07','Bardzo żwywiołowy pies szuka właściela','Przy drodze',1,'Gotowy do adopcji','admin','2022-03-07',NULL,NULL,'https://cataas.com/cat/60da12c802e5cf001caa36cc'),
	 ('Kot','Docent','Kot','Europejski',2021,4,1,'2022-03-07','Malusieńki maltanczyk czeka na dobrego właściciela','W lesie',2,'Gotowy do adopcji','admin','2022-03-07',NULL,NULL,'https://cataas.com/cat/6028590ffdeef60017d4a930'),
	 ('Kot','Mniszek','Kot','Europejski',2020,12,18.1,'2022-03-07','Bardzo żwywiołowy pies szuka właściela','Przy drodze',2,'Gotowy do adopcji','admin','2022-03-07',NULL,NULL,'https://cataas.com/cat/5ac1826061d533000f42c52f'),
	 ('Kot','Docent','Kot','Europejski',2021,4,1,'2022-03-07','Malusieńki maltanczyk czeka na dobrego właściciela','W lesie',1,'Gotowy do adopcji','admin','2022-03-07',NULL,NULL,'https://cataas.com/cat/5ac3fc9361d533000f42c539'),
	 ('Kot','Nestor','Kot','Europejski',2020,12,18.1,'2022-03-07','Bardzo żwywiołowy pies szuka właściela','Przy drodze',1,'Gotowy do adopcji','admin','2022-03-07',NULL,NULL,'https://cataas.com/cat/5f22a49f5bc3fa00104444a7'),
	 ('Kot','Mikrus','Kot','Europejski',2021,4,1,'2022-03-07','Malusieńki maltanczyk czeka na dobrego właściciela','W lesie',2,'Gotowy do adopcji','admin','2022-03-07',NULL,NULL,'https://cataas.com/cat/6104b503e10e00001202111a'),
	 ('Kot','Leon','Kot','Europejski',2020,12,18.1,'2022-03-07','Bardzo żwywiołowy pies szuka właściela','Przy drodze',2,'Gotowy do adopcji','admin','2022-03-07',NULL,NULL,'https://cataas.com/cat/5d39a47d14ca600011538e5e'),
	 ('Kot','Tołdi','Kot','Europejski',2021,4,1,'2022-03-07','Malusieńki maltanczyk czeka na dobrego właściciela','W lesie',1,'Gotowy do adopcji','admin','2022-03-07',NULL,NULL,'https://cataas.com/cat/5f451ec35bc3fa00104444dd'),
	 ('Kot','Szajba','Kot','Europejski',2020,12,18.1,'2022-03-07','Bardzo żwywiołowy pies szuka właściela','Przy drodze',1,'Gotowy do adopcji','admin','2022-03-07',NULL,NULL,'https://cataas.com/cat/5fa09fe3d756950018646202');
INSERT INTO pet ("type","name",sex,race_type,birth_year,birth_month,weight,admittance_date,description,found_place,shelter_id,status,created_by,created_at,modified_by,modified_at,image_url) VALUES
	 ('Kot','Lucky','Kot','Europejski',2021,4,1,'2022-03-07','Malusieńki maltanczyk czeka na dobrego właściciela','W lesie',2,'Gotowy do adopcji','admin','2022-03-07',NULL,NULL,'https://cataas.com/cat/600ccb75db2f3d001170a387'),
	 ('Pies','Luna','Suczka','Husky',2021,4,1,'2022-03-07','Malusieńki maltanczyk czeka na dobrego właściciela','W lesie',1,'Gotowy do adopcji','admin','2022-03-07',NULL,NULL,'https://images.dog.ceo/breeds/bulldog-boston/n02096585_7887.jpg'),
	 ('Pies','Tina','Suczka','Labrador',2020,12,18.1,'2022-03-07','Bardzo żwywiołowy pies szuka właściela','Przy drodze',1,'Gotowy do adopcji','admin','2022-03-07',NULL,NULL,'https://images.dog.ceo/breeds/terrier-norwich/n02094258_1460.jpg'),
	 ('Pies','Diana','Suczka','Terier',2021,4,1,'2022-03-07','Malusieńki maltanczyk czeka na dobrego właściciela','W lesie',2,'Gotowy do adopcji','admin','2022-03-07',NULL,NULL,'https://images.dog.ceo/breeds/airedale/n02096051_1244.jpg'),
	 ('Pies','Sonia','Suczka','Sznaucer',2020,12,18.1,'2022-03-07','Bardzo żwywiołowy pies szuka właściela','Przy drodze',2,'Gotowy do adopcji','admin','2022-03-07',NULL,NULL,'https://images.dog.ceo/breeds/ovcharka-caucasian/IMG_20190822_215037.jpg'),
	 ('Pies','Elza','Suczka','Mieszaniec',2021,4,1,'2022-03-07','Malusieńki maltanczyk czeka na dobrego właściciela','W lesie',1,'Gotowy do adopcji','admin','2022-03-07',NULL,NULL,'https://images.dog.ceo/breeds/dachshund/dachshund-2033796_640.jpg'),
	 ('Pies','Sara','Suczka','Owczrek niemiecki',2020,12,18.1,'2022-03-07','Bardzo żwywiołowy pies szuka właściela','Przy drodze',1,'Gotowy do adopcji','admin','2022-03-07',NULL,NULL,'https://images.dog.ceo/breeds/schnauzer-miniature/n02097047_2776.jpg'),
	 ('Pies','Tosia','Suczka','Husky',2021,4,1,'2022-03-07','Malusieńki maltanczyk czeka na dobrego właściciela','W lesie',2,'Gotowy do adopcji','admin','2022-03-07',NULL,NULL,'https://images.dog.ceo/breeds/terrier-westhighland/n02098286_1260.jpg'),
	 ('Pies','Lola','Suczka','Amstaff',2020,12,18.1,'2022-03-07','Bardzo żwywiołowy pies szuka właściela','Przy drodze',2,'Gotowy do adopcji','admin','2022-03-07',NULL,NULL,'https://images.dog.ceo/breeds/poodle-miniature/n02113712_3795.jpg'),
	 ('Pies','Fibi','Suczka','Bokser',2021,4,1,'2022-03-07','Malusieńki maltanczyk czeka na dobrego właściciela','W lesie',1,'Gotowy do adopcji','admin','2022-03-07',NULL,NULL,'https://images.dog.ceo/breeds/cotondetulear/100_2397.jpg');
INSERT INTO pet ("type","name",sex,race_type,birth_year,birth_month,weight,admittance_date,description,found_place,shelter_id,status,created_by,created_at,modified_by,modified_at,image_url) VALUES
	 ('Pies','Daisy','Suczka','Bernardyn',2020,12,18.1,'2022-03-07','Bardzo żwywiołowy pies szuka właściela','Przy drodze',1,'Gotowy do adopcji','admin','2022-03-07',NULL,NULL,'https://images.dog.ceo/breeds/pitbull/IMG_20190826_121528_876.jpg'),
	 ('Pies','Maja','Suczka','Pitbull',2021,4,1,'2022-03-07','Malusieńki maltanczyk czeka na dobrego właściciela','W lesie',2,'Gotowy do adopcji','admin','2022-03-07',NULL,NULL,'https://images.dog.ceo/breeds/terrier-patterdale/dog-1268559_640.jpg'),
	 ('Pies','Megi','Suczka','Wyżeł',2020,12,18.1,'2022-03-07','Bardzo żwywiołowy pies szuka właściela','Przy drodze',2,'Gotowy do adopcji','admin','2022-03-07',NULL,NULL,'https://images.dog.ceo/breeds/terrier-american/n02093428_5750.jpg'),
	 ('Pies','Kira','Suczka','Sznaucer miniaturowy',2021,4,1,'2022-03-07','Malusieńki maltanczyk czeka na dobrego właściciela','W lesie',1,'Gotowy do adopcji','admin','2022-03-07',NULL,NULL,'https://images.dog.ceo/breeds/retriever-curly/n02099429_1122.jpg'),
	 ('Pies','Nela','Suczka','Owczarek kaukaski',2020,12,18.1,'2022-03-07','Bardzo żwywiołowy pies szuka właściela','Przy drodze',1,'Gotowy do adopcji','admin','2022-03-07',NULL,NULL,'https://images.dog.ceo/breeds/maltese/n02085936_5488.jpg'),
	 ('Pies','Mika','Suczka','Shih tzu',2021,4,1,'2022-03-07','Malusieńki maltanczyk czeka na dobrego właściciela','W lesie',2,'Gotowy do adopcji','admin','2022-03-07',NULL,NULL,'https://images.dog.ceo/breeds/eskimo/n02109961_4619.jpg'),
	 ('Pies','Leya','Suczka','Cocker spaniel',2020,12,18.1,'2022-03-07','Bardzo żwywiołowy pies szuka właściela','Przy drodze',2,'Gotowy do adopcji','admin','2022-03-07',NULL,NULL,'https://images.dog.ceo/breeds/shiba/shiba-3i.jpg'),
	 ('Pies','Milka','Suczka','Amstaff',2021,4,1,'2022-03-07','Malusieńki maltanczyk czeka na dobrego właściciela','W lesie',1,'Gotowy do adopcji','admin','2022-03-07',NULL,NULL,'https://images.dog.ceo/breeds/beagle/n02088364_7784.jpg'),
	 ('Pies','Fiona','Suczka','Jamnik',2020,12,18.1,'2022-03-07','Bardzo żwywiołowy pies szuka właściela','Przy drodze',1,'Gotowy do adopcji','admin','2022-03-07',NULL,NULL,'https://images.dog.ceo/breeds/sheepdog-shetland/n02105855_6802.jpg'),
	 ('Pies','Roxi','Suczka','Mieszaniec',2021,4,1,'2022-03-07','Malusieńki maltanczyk czeka na dobrego właściciela','W lesie',2,'Gotowy do adopcji','admin','2022-03-07',NULL,NULL,'https://images.dog.ceo/breeds/papillon/n02086910_4505.jpg');
INSERT INTO pet ("type","name",sex,race_type,birth_year,birth_month,weight,admittance_date,description,found_place,shelter_id,status,created_by,created_at,modified_by,modified_at,image_url) VALUES
	 ('Pies','Luka','Suczka','Mieszaniec',2020,12,18.1,'2022-03-07','Bardzo żwywiołowy pies szuka właściela','Przy drodze',2,'Gotowy do adopcji','admin','2022-03-07',NULL,NULL,'https://images.dog.ceo/breeds/malamute/n02110063_13228.jpg'),
	 ('Pies','Muffinka','Suczka','Mieszaniec',2021,4,1,'2022-03-07','Malusieńki maltanczyk czeka na dobrego właściciela','W lesie',1,'Gotowy do adopcji','admin','2022-03-07',NULL,NULL,'https://images.dog.ceo/breeds/terrier-sealyham/n02095889_1313.jpg'),
	 ('Pies','Ira','Suczka','Mieszaniec',2020,12,18.1,'2022-03-07','Bardzo żwywiołowy pies szuka właściela','Przy drodze',1,'Gotowy do adopcji','admin','2022-03-07',NULL,NULL,'https://images.dog.ceo/breeds/retriever-curly/n02099429_1696.jpg'),
	 ('Pies','Bajka','Suczka','Labrador',2021,4,1,'2022-03-07','Malusieńki maltanczyk czeka na dobrego właściciela','W lesie',2,'Gotowy do adopcji','admin','2022-03-07',NULL,NULL,'https://images.dog.ceo/breeds/kelpie/n02105412_5737.jpg'),
	 ('Pies','Figa','Suczka','Sznaucer',2020,12,18.1,'2022-03-07','Bardzo żwywiołowy pies szuka właściela','Przy drodze',2,'Gotowy do adopcji','admin','2022-03-07',NULL,NULL,'https://images.dog.ceo/breeds/deerhound-scottish/n02092002_4220.jpg'),
	 ('Pies','Gaja','Suczka','Bernardyn',2021,4,1,'2022-03-07','Malusieńki maltanczyk czeka na dobrego właściciela','W lesie',1,'Gotowy do adopcji','admin','2022-03-07',NULL,NULL,'https://images.dog.ceo/breeds/doberman/n02107142_18582.jpg'),
	 ('Pies','Sisi','Suczka','Mieszaniec',2020,12,18.1,'2022-03-07','Bardzo żwywiołowy pies szuka właściela','Przy drodze',1,'Gotowy do adopcji','admin','2022-03-07',NULL,NULL,'https://images.dog.ceo/breeds/germanshepherd/n02106662_26549.jpg'),
	 ('Kot','Suzi','Kocica','Europejski',2021,4,1,'2022-03-07','Malusieńki maltanczyk czeka na dobrego właściciela','W lesie',2,'Gotowy do adopcji','admin','2022-03-07',NULL,NULL,'https://cataas.com/cat/61009bfbcaacc400184f6b24'),
	 ('Kot','Aza','Kocica','Europejski',2020,12,18.1,'2022-03-07','Bardzo żwywiołowy pies szuka właściela','Przy drodze',2,'Gotowy do adopcji','admin','2022-03-07',NULL,NULL,'https://cataas.com/cat/595f280c557291a9750ebf7f'),
	 ('Kot','Saba','Kocica','Europejski',2021,4,1,'2022-03-07','Malusieńki maltanczyk czeka na dobrego właściciela','W lesie',1,'Gotowy do adopcji','admin','2022-03-07',NULL,NULL,'https://cataas.com/cat/5b55c2addf7368000f914b48');
INSERT INTO pet ("type","name",sex,race_type,birth_year,birth_month,weight,admittance_date,description,found_place,shelter_id,status,created_by,created_at,modified_by,modified_at,image_url) VALUES
	 ('Kot','Nuka','Kocica','Europejski',2020,12,18.1,'2022-03-07','Bardzo żwywiołowy pies szuka właściela','Przy drodze',1,'Gotowy do adopcji','admin','2022-03-07',NULL,NULL,'https://cataas.com/cat/5d39a47d14ca600011538e5e'),
	 ('Kot','Mila','Kocica','Europejski',2021,4,1,'2022-03-07','Malusieńki maltanczyk czeka na dobrego właściciela','W lesie',2,'Gotowy do adopcji','admin','2022-03-07',NULL,NULL,'https://cataas.com/cat/5d84d0867ed56f0011937810'),
	 ('Kot','Kesia','Kocica','Europejski',2020,12,18.1,'2022-03-07','Bardzo żwywiołowy pies szuka właściela','Przy drodze',2,'Gotowy do adopcji','admin','2022-03-07',NULL,NULL,'https://cataas.com/cat/5ec37f5efc6b05001805d6b7'),
	 ('Kot','Ciri','Kocica','Europejski',2021,4,1,'2022-03-07','Malusieńki maltanczyk czeka na dobrego właściciela','W lesie',1,'Gotowy do adopcji','admin','2022-03-07',NULL,NULL,'https://cataas.com/cat/6136c137ebad510011b54b90'),
	 ('Kot','Mery','Kocica','Europejski',2020,12,18.1,'2022-03-07','Bardzo żwywiołowy pies szuka właściela','Przy drodze',1,'Gotowy do adopcji','admin','2022-03-07',NULL,NULL,'https://cataas.com/cat/5c3ca99f8d32f1000fb94a2e'),
	 ('Kot','Wiga','Kocica','Europejski',2021,4,1,'2022-03-07','Malusieńki maltanczyk czeka na dobrego właściciela','W lesie',2,'Gotowy do adopcji','admin','2022-03-07',NULL,NULL,'https://cataas.com/cat/5b0625be43314d000f6f4584'),
	 ('Kot','Koka','Kocica','Europejski',2020,12,18.1,'2022-03-07','Bardzo żwywiołowy pies szuka właściela','Przy drodze',2,'Gotowy do adopcji','admin','2022-03-07',NULL,NULL,'https://cataas.com/cat/600029321bf75600108f6170'),
	 ('Kot','Fuzja','Kocica','Europejski',2021,4,1,'2022-03-07','Malusieńki maltanczyk czeka na dobrego właściciela','W lesie',1,'Gotowy do adopcji','admin','2022-03-07',NULL,NULL,'https://cataas.com/cat/6010b5c447d128001b7bbb67'),
	 ('Kot','Kaja','Kocica','Europejski',2020,12,18.1,'2022-03-07','Bardzo żwywiołowy pies szuka właściela','Przy drodze',1,'Gotowy do adopcji','admin','2022-03-07',NULL,NULL,'https://cataas.com/cat/618cead9536db3001894b4ee'),
	 ('Kot','Holly','Kocica','Europejski',2021,4,1,'2022-03-07','Malusieńki maltanczyk czeka na dobrego właściciela','W lesie',2,'Gotowy do adopcji','admin','2022-03-07',NULL,NULL,'https://cataas.com/cat/5de95dd1be069d00117c2cb2');
INSERT INTO pet ("type","name",sex,race_type,birth_year,birth_month,weight,admittance_date,description,found_place,shelter_id,status,created_by,created_at,modified_by,modified_at,image_url) VALUES
	 ('Kot','Salma','Kocica','Europejski',2020,12,18.1,'2022-03-07','Bardzo żwywiołowy pies szuka właściela','Przy drodze',2,'Gotowy do adopcji','admin','2022-03-07',NULL,NULL,'https://cataas.com/cat/5d39a47b14ca600011538e56'),
	 ('Kot','Macy','Kocica','Europejski',2021,4,1,'2022-03-07','Malusieńki maltanczyk czeka na dobrego właściciela','W lesie',1,'Gotowy do adopcji','admin','2022-03-07',NULL,NULL,'https://cataas.com/cat/5fd10f678a2e6f0019858fbd'),
	 ('Kot','Channel','Kocica','Europejski',2020,12,18.1,'2022-03-07','Bardzo żwywiołowy pies szuka właściela','Przy drodze',1,'Gotowy do adopcji','admin','2022-03-07',NULL,NULL,'https://cataas.com/cat/5b5a97a5df7368000f914b58'),
	 ('Kot','Kala','Kocica','Europejski',2020,12,18.1,'2022-03-07','Bardzo żwywiołowy pies szuka właściela','Przy drodze',2,'Gotowy do adopcji','admin','2022-03-07',NULL,NULL,'https://cataas.com/cat/5cbeca1aad0f8100129e9945'),
	 ('Kot','Wiga','Kocica','Europejski',2021,4,1,'2022-03-07','Malusieńki maltanczyk czeka na dobrego właściciela','W lesie',1,'Gotowy do adopcji','admin','2022-03-07',NULL,NULL,'https://cataas.com/cat/621566fa3520370010f2ae88'),
	 ('Kot','Mia','Kocica','Europejski',2020,12,18.1,'2022-03-07','Bardzo żwywiołowy pies szuka właściela','Przy drodze',1,'Gotowy do adopcji','admin','2022-03-07',NULL,NULL,'https://cataas.com/cat/618ceada536db3001894b4f9'),
	 ('Kot','Coffee','Kocica','Europejski',2021,4,1,'2022-03-07','Malusieńki maltanczyk czeka na dobrego właściciela','W lesie',2,'Gotowy do adopcji','admin','2022-03-07',NULL,NULL,'https://cataas.com/cat/5d93d3bb95aae800189d0bb1'),
	 ('Kot','Chelsea','Kocica','Europejski',2020,12,18.1,'2022-03-07','Bardzo żwywiołowy pies szuka właściela','Przy drodze',1,'Niekatualne','admin','2022-03-07','admin','2022-05-17','https://cataas.com/cat/6028590ffdeef60017d4a930'),
	 ('Kot','Rumba','Kocica','Europejski',2021,4,1,'2022-03-07','Malusieńki maltanczyk czeka na dobrego właściciela','W lesie',2,'Niekatualne','admin','2022-03-07','admin','2022-05-17','https://cataas.com/cat/5e9972941b7a400011744237'),
	 ('Kot','Shila','Kocica','Europejski',2021,4,1,'2022-03-07','Malusieńki maltanczyk czeka na dobrego właściciela','W lesie',2,'Niekatualne','admin','2022-03-07','admin','2022-05-17','https://cataas.com/cat/60ef3f0151a2ca0011c74558');
INSERT INTO pet ("type","name",sex,race_type,birth_year,birth_month,weight,admittance_date,description,found_place,shelter_id,status,created_by,created_at,modified_by,modified_at,image_url) VALUES
	 ('Kot','Lila','Kocica','Europejski',2021,4,1,'2022-03-07','Malusieńki maltanczyk czeka na dobrego właściciela','W lesie',1,'Niekatualne','admin','2022-03-07','admin','2022-05-17','https://cataas.com/cat/5e9970351b7a400011744233'),
	 ('Kot','Mela','Kocica','Europejski',2020,12,18.1,'2022-03-07','Bardzo żwywiołowy pies szuka właściela','Przy drodze',2,'Niekatualne','admin','2022-03-07','admin','2022-05-17','https://cataas.com/cat/60da12cc02e5cf001caa36d3');
INSERT INTO email_template(email_template_type, subject, text) values (
  'Dodanie nowego użytkownika', 'Rejestracja w serwisie walk.doggg', 'Dzień dobry %s, <br> <p>Zostałeś/aś zarejestrowany w serwisie WalkDog. Twoje tymczasowe hasło to: %s</p> <br><p>Pozdrawiamy, <br>załoga WalkDog</p>'
);

INSERT INTO email_template(email_template_type, subject, text) values (
  'Rejestracja nowego użytkownika', 'Rejestracja w serwisie walk.doggg', 'Dzień dobry %s, <br> <p>Zostałeś/aś zarejestrowany w serwisie WalkDog.</p> <br><p>Pozdrawiamy, <br>załoga WalkDog</p>'
);

INSERT INTO email_template(email_template_type, subject, text) values (
  'Potwierdzenie spotkania', 'Potwierdzenie spotkania', 'Dzień dobry %s, <br> <p>Z radością informujemy, że Twoje spotkanie ze zwierzakiem zostało zaakceptowane.</p> <br><p>Pozdrawiamy, <br>załoga WalkDog</p>'
);

INSERT INTO email_template(email_template_type, subject, text) values (
  'Anulowanie spotkania', 'Anulowanie spotkania', 'Dzień dobry %s, <br> <p>Przykro nam poinformowac, że administrator schroniska anulował Twoje spotkanie.</p> <br><p>Pozdrawiamy, <br>załoga WalkDog</p>'
);
insert into taker (first_name, last_name, shelter_id, created_by, created_at, status, phone_number, email, image_url) values (
	'Stanley', 'Hudson', 1, 'admin', now(), 'Aktywny', '789123456', 's.hudson@hotmail.com', 'https://roost.nbcuni.com/bin/viewasset.html/content/dam/Peacock/Campaign/landingpages/library/theoffice/characterbios/office-character-stanley-min.png/_jcr_content/renditions/original?downsize=1200:*&output-quality=70'
);
insert into taker (first_name, last_name, shelter_id, created_by, created_at, status, phone_number, email, image_url) values (
	'Phyllis', 'Vance', 1, 'admin', now(), 'Aktywny', '891812674', 'p.vance@hotmail.com', 'https://m.media-amazon.com/images/M/MV5BMjA4NTM3NjUwMV5BMl5BanBnXkFtZTcwMDMyMTk3Mw@@._V1_.jpg'
);
insert into taker (first_name, last_name, shelter_id, created_by, created_at, status, phone_number, email, image_url) values (
	'Meredith', 'Palmer', 1, 'admin', now(), 'Aktywny', '875241122', 'm.palmer@hotmail.com', 'https://www.looper.com/img/gallery/whatever-happened-to-meredith-from-the-office/intro-1526005235.jpg'
);
insert into taker (first_name, last_name, shelter_id, created_by, created_at, status, phone_number, email, image_url) values (
	'Toby', 'Flenderson', 1, 'admin', now(), 'Aktywny','518237128', 't.flenderson@hotmail.com', 'https://www.looper.com/img/gallery/the-most-underrated-toby-scene-in-the-office-according-to-fans/l-intro-1625839502.jpg'
);
insert into taker (first_name, last_name, shelter_id, created_by, created_at, status, phone_number, email, image_url) values (
	'Creed', 'Bratton', 1, 'admin', now(), 'Aktywny', '507778781', 'c.bartton@hotmail.com', 'https://m.media-amazon.com/images/M/MV5BMjQzNDMwMjQ5OF5BMl5BanBnXkFtZTgwMTc5MTY1OTE@._V1_.jpg'
);
insert into taker (first_name, last_name, shelter_id, created_by, created_at, status, phone_number, email, image_url) values (
	'Darryl', 'Philbin', 1, 'admin', now(), 'Aktywny', '678567509', 'd.philbin@hotmail.com', 'https://tv-fanatic-res.cloudinary.com/iu/s--sv1ehwjq--/t_full/cs_srgb,f_auto,fl_strip_profile.lossy,q_auto:420/v1371070490/darryl-philbin.png'
);
insert into taker (first_name, last_name, shelter_id, created_by, created_at, status, phone_number, email, image_url) values (
	'Roy', 'Anderson', 1, 'admin', now(), 'Aktywny','878123453', 'r.anderson@hotmail.com', 'https://preview.redd.it/lgzl6r5ds5g11.jpg?auto=webp&s=f87b52fb96a41136e7926fa1ce91ce15951a3a3c'
);
insert into taker (first_name, last_name, shelter_id, created_by, created_at, status, phone_number, email, image_url) values (
	'Gabe', 'Lewis', 1, 'admin', now(), 'Aktywny', '770989134', 'g.lewis@hotmail.com', 'https://cdn3.whatculture.com/images/2020/05/3a4ccfb6b8b92106-600x338.jpg'
);
insert into taker (first_name, last_name, shelter_id, created_by, created_at, status, phone_number, email, image_url) values (
	'Todd', 'Packer', 1, 'admin', now(), 'Aktywny', '606732122', 't.packer@hotmail.com', 'https://static.wikia.nocookie.net/villains/images/9/9a/ToddPackerPicFace.png/revision/latest?cb=20190504233033'
);
insert into taker (first_name, last_name, shelter_id, created_by, created_at, status, phone_number, email, image_url) values (
	'Ed', 'Truck', 1, 'admin', now(), 'Aktywny', '514439008', 'e.truck@hotmail.com', 'https://static.wikia.nocookie.net/theoffice/images/3/32/Edtruck.jpg/revision/latest/top-crop/width/360/height/360?cb=20060703233048'
);
insert into taker (first_name, last_name, shelter_id, created_by, created_at, status, phone_number, email, image_url) values (
	'David', 'Wallace', 2, 'admin', now(), 'Aktywny', '607823990', 'd.wallace@hotmail.com', 'https://static.wikia.nocookie.net/theoffice/images/7/78/Screen_Shot_2017-01-28_at_9.58.11_PM.png/revision/latest?cb=20170129035841'
);
insert into taker (first_name, last_name, shelter_id, created_by, created_at, status, phone_number, email, image_url) values (
	'Dwight', 'Schrute', 2, 'admin', now(), 'Aktywny', '509887456', 'd.shrute@gmail.com', 'https://www.cheatsheet.com/wp-content/uploads/2021/02/Dwight-Schrute-The-Office.jpg'
);
insert into taker (first_name, last_name, shelter_id, created_by, created_at, status, phone_number, email, image_url) values (
	'Marcelina', 'Ogórek', 2, 'admin', now(), 'Aktywny', '540989998', 'm.ogorek@hotmail.com', 'https://media-exp1.licdn.com/dms/image/C4E03AQGcEX4WPztCXQ/profile-displayphoto-shrink_100_100/0/1628165411702?e=1648684800&v=beta&t=_IFQ7ECmfJ9b3FMdrRVx50y_r6fgt41e95RN5_1JVOc'
);
insert into taker (first_name, last_name, shelter_id, created_by, created_at, status, phone_number, email, image_url) values (
	'Kevin', 'Malone', 2, 'admin', now(), 'Aktywny', '705670987', 'k.malone@hotmail.com', 'https://blenderartists.org/uploads/default/original/4X/3/6/3/3638128903092bc831f1513036a7f4288754157d.jpeg'
);
insert into taker (first_name, last_name, shelter_id, created_by, created_at, status, phone_number, email, image_url) values (
	'Andrew', 'Bernard', 2, 'admin', now(), 'Aktywny', '501432445', 'a.bernard@hotmail.com', 'https://static2.srcdn.com/wordpress/wp-content/uploads/2018/04/Ed-Helms-as-Andy-Bernard-on-The-Office.jpg?q=50&fit=crop&w=740&h=370&dpr=1.5'
);
insert into taker (first_name, last_name, shelter_id, created_by, created_at, status, phone_number, email, image_url) values (
	'Kelly', 'Kapoor', 2, 'admin', now(), 'Aktywny', '609996543', 'k.kapoor@hotmail.com', 'https://upload.wikimedia.org/wikipedia/en/6/69/Kelly_Kapoor.jpg'
);
insert into taker (first_name, last_name, shelter_id, created_by, created_at, status, phone_number, email, image_url) values (
	'Oscar', 'Martinez', 2, 'admin', now(), 'Aktywny', '544343444','o.martinez@hotmail.com', 'https://images.hobbydatabase.com/processed_uploads/subject_photo/subject_photo/image/63429/1602522980-12464-3984/OSCARPIC_large.jpg'
);
insert into taker (first_name, last_name, shelter_id, created_by, created_at, status, phone_number, email, image_url) values (
	'Angela', 'Martin', 2, 'admin', now(), 'Aktywny', '700909890', 'a.martin@hotmail.com', 'https://i0.wp.com/devsari.com/wp-content/uploads/2021/04/c8cbd3e2a5d507794abd7b8dff59a8fd.jpg?fit=512%2C288&ssl=1'
);
insert into taker (first_name, last_name, shelter_id, created_by, created_at, status, phone_number, email, image_url) values (
	'Jim', 'Halpert', 2, 'admin', now(), 'Aktywny', '517667873', 'j.halpert@hotmail.com', 'https://www.looper.com/img/gallery/heres-how-john-krasinski-really-feels-about-the-offices-jim-halpert/john-krasinski-occasionally-found-jim-annoying-1625883240.jpg'
);
insert into taker (first_name, last_name, shelter_id, created_by, created_at, status, phone_number, email, image_url) values (
	'Micheal', 'Scott', 2, 'admin', now(), 'Aktywny', '509983456', 'm.scott@hotmail.com', 'http://ocdn.eu/images/pulscms/NzU7MDA_/41f6a967ba865d25886a615d2a0fe254.jpg'
);
insert into taker (first_name, last_name, shelter_id, created_by, created_at, status, phone_number, email, image_url) values (
	'Robert', 'California', 2, 'admin', now(), 'Aktywny', '513098789', 'r.california@hotmail.com', 'https://www.looper.com/img/gallery/the-truth-about-robert-california-from-the-office/intro-1583335474.jpg'
);


do
$$
declare
    f record;
begin
    for f in select *
           from pet p order by p.id
    loop
		insert into taker_pets (pets_id, takers_id)
			select p.id as pet_id, t.id as taker_id from pet p left join taker t on p.shelter_id = t.shelter_id  where p.id = f.id
		limit 3 offset (select floor(random() * 7));
   end loop;
end;
$$;

INSERT INTO app_user
(id, user_id, first_name, last_name, user_name, "password", email, profile_image_url, last_login_date, last_login_date_display, joined_date, "role", is_active, is_not_locked, shelter_id)
VALUES(1, '5412536576', 'Michal', 'Adamczyk', 'loko', '$2a$10$6fQu7uQNbnFV6zfPfHlzx.vUxqawxdIz2Fmon.G4r4XqHrSYm5nL2', 'adamczyk888@gmail.com', 'http://localhost:8080/user/image/profile/loko', '2022-05-17', '2022-05-12', '2022-03-13', 'ROLE_SUPER_ADMIN', true, true, 1);





