import { faGlobe } from "@fortawesome/free-solid-svg-icons";
import { faCircleCheck, faInputText } from "@fortawesome/pro-duotone-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";
import Input from "../components/Input/Input";
import InputWrapper from "../components/InputWrapper/InputWrapper";
import { formatSiteUrl } from "../utils/formatSiteUrl";
import Form from "./Form";
import Textarea from "../components/Textarea/Textarea";
import { checkSubdomain } from "../api/checkSubdomain";
import { useEffect } from "react";
import ImgUploader from "../components/ImgUploader/ImgUploader";
import { Button } from "../components/Button/Button";

const SiteBuilderGeneralForm = ({ state, dispatch, logoRef, bannerRef }) => {
  const [isDomainAvailable, setIsDomainAvailable] = React.useState(null);

  useEffect(() => {
    checkSubdomainAvailability(state.general.domain);
  }, [state.general.domain]);

  const checkSubdomainAvailability = async () => {
    const { available } = await checkSubdomain(state.general.domain);

    if (available && state.general.domain !== "") {
      setIsDomainAvailable(true);
    } else {
      setIsDomainAvailable(false);
    }
  };

  return (
    <Form>
      <InputWrapper label="Subdomain" htmlFor="subdomain">
        <Input
          customIcon={<p className="font-bold">https://</p>}
          placeholder="your_domain"
          value={state.general.domain}
          onInput={(e) => {
            dispatch({
              type: "SET_GENERAL",
              field: "domain",
              payload: e.target.value.trim().replace(/[\W]/g, ""),
            });
          }}
        />
      </InputWrapper>

      <p className="text flex items-center gap-6 text-xs">
        <span className="flex items-center">
          <FontAwesomeIcon
            icon={faGlobe}
            className="text-accent-primary mr-2"
          />
          {formatSiteUrl(state.general.domain)}
        </span>

        {isDomainAvailable && (
          <span className="domain-check flex items-center text-green-500 text-xs">
            <FontAwesomeIcon
              icon={faCircleCheck}
              className="text-green-500 mr-2"
            />
            domain available
          </span>
        )}
      </p>

      <InputWrapper label="Site Name" htmlFor="siteName" className="mt-6">
        <Input
          icon={faInputText}
          placeholder="Your site's headline"
          value={state.general.siteName}
          onInput={(e) =>
            dispatch({
              type: "SET_GENERAL",
              field: "siteName",
              payload: e.target.value,
            })
          }
        />
      </InputWrapper>

      <InputWrapper label="Site Description" htmlFor="siteDescription">
        <Textarea
          placeholder="Who are you and what do you do?"
          value={state.general.description}
          onInput={(e) =>
            dispatch({
              type: "SET_GENERAL",
              field: "description",
              payload: e.target.value,
            })
          }
        />
      </InputWrapper>

      <InputWrapper label="Logo" subLabel="Optimal image size 200 x 200">
        {typeof state.general.logo === "string" && state.general.logo ? (
          <div className="flex items-center">
            <img
              src={state.general.logo}
              alt=""
              className="w-40 mr-6 rounded-lg"
            />
            <Button
              variant="secondary"
              onClick={() => {
                dispatch({
                  type: "REMOVE_LOGO",
                });
              }}
            >
              Remove logo
            </Button>
          </div>
        ) : (
          <ImgUploader
            url="http://localhost:4000/api/upload/v1/logo"
            ref={logoRef}
            files={state.general.logo}
            setFiles={(files) =>
              dispatch({
                type: "SET_LOGO",
                payload: files,
              })
            }
          />
        )}
      </InputWrapper>

      <InputWrapper label="Banner" subLabel="Optimal image size 1500 x 500">
        {typeof state.general.banner === "string" && state.general.banner ? (
          <div className="flex flex-col">
            <img
              src={state.general.banner}
              alt=""
              className="w-full  rounded-lg mb-4"
            />
            <Button
              variant="secondary"
              onClick={() => {
                dispatch({
                  type: "REMOVE_BANNER",
                });
              }}
            >
              Remove banner
            </Button>
          </div>
        ) : (
          <ImgUploader
            url="http://localhost:4000/api/upload/v1/banner"
            files={state.general.banner}
            setFiles={(files) =>
              dispatch({
                type: "SET_BANNER",
                payload: files,
              })
            }
            ref={bannerRef}
          />
        )}
      </InputWrapper>
    </Form>
  );
};

export default SiteBuilderGeneralForm;
