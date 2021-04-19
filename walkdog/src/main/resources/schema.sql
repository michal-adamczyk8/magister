-- DROP TABLE IF EXISTS shelter;
-- DROP TABLE IF EXISTS shelter_address;
--DROP SEQUENCE IF EXISTS sequence_shelter_id;

CREATE SEQUENCE sequence_shelter_id START WITH 1 INCREMENT BY 1 MAXVALUE 99999;
CREATE SEQUENCE sequence_shelter_address_id START WITH 1 INCREMENT BY 1 MAXVALUE 99999;
CREATE SEQUENCE sequence_pet_id START WITH 1 INCREMENT BY 1 MAXVALUE 99999;

CREATE TABLE shelter
(
    id           NUMBER        NOT NULL AUTO_INCREMENT,
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
    id                 NUMBER       NOT NULL AUTO_INCREMENT,
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
    id                NUMBER        NOT NULL AUTO_INCREMENT,
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