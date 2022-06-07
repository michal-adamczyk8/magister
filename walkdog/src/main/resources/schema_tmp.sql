CREATE TABLE shelter
(
    id           SERIAL        NOT NULL,
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
    modified_at  DATE,
    PRIMARY KEY (id)
);

CREATE TABLE shelter_address
(
    id                 SERIAL       NOT NULL,
    street_name        VARCHAR(255) NOT NULL,
    house_number       VARCHAR(5)   NOT NULL,
    flat_number        VARCHAR(5),
    city               VARCHAR(100) NOT NULL,
    zip_code           VARCHAR(6)   NOT NULL,
    created_by         VARCHAR(255) NOT NULL,
    created_at         DATE         NOT NULL,
    modified_by        VARCHAR(255),
    modified_at        DATE,
    PRIMARY KEY (id)
);

ALTER TABLE shelter
    ADD FOREIGN KEY (address_id) REFERENCES shelter_address (id);

CREATE TABLE pet
(
    id                SERIAL        NOT NULL,
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
    shelter_id        INT           NOT NULL,
    status            VARCHAR(50)   NOT NULL,
    created_by        VARCHAR(255)  NOT NULL,
    created_at        DATE          NOT NULL,
    modified_by       VARCHAR(255),
    modified_at       DATE,
    PRIMARY KEY (id)
);

ALTER TABLE pet
    ADD FOREIGN KEY(shelter_id) REFERENCES shelter (id);

CREATE TABLE app_user
(
  id                        SERIAL        NOT NULL,
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
  PRIMARY KEY (id)

);

ALTER TABLE app_user
    ADD FOREIGN KEY(shelter_id) REFERENCES shelter (id);

CREATE TABLE email_template
(
  id                        SERIAL        NOT NULL,
  email_template_type       VARCHAR(100)  NOT NULL,
  subject                   VARCHAR(255)  NOT NULL,
  text                      VARCHAR(2550) NOT NULL,
  PRIMARY KEY (id)
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
  id            SERIAL        NOT NULL,
  first_name    VARCHAR(255)  NOT NULL,
  last_name     VARCHAR(255)  NOT NULL,
  status	      VARCHAR(20)   NOT NULL,
  phone_number  VARCHAR(50)   NOT NULL,
  email         VARCHAR(100)  NOT NULL,
  shelter_id    INT           NOT NULL,
  created_by    VARCHAR(255)  NOT NULL,
  created_at    DATE          NOT NULL,
  modified_by   VARCHAR(255),
  modified_at   DATE,
  PRIMARY KEY (id)
);

ALTER TABLE taker
    ADD FOREIGN KEY(shelter_id) REFERENCES shelter (id);

CREATE TABLE taker_pets
(
  takers_id  INT REFERENCES taker (id) ON DELETE CASCADE,
  pets_id    INT REFERENCES pet (id) ON CASCADE ON DELETE CASCADE,
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

alter table pet add column image_url varchar(1000);
alter table taker add column image_url varchar(1000);