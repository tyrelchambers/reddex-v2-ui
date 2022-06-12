import "filepond/dist/filepond.min.css";
import "filepond-plugin-image-preview/dist/filepond-plugin-image-preview.css";

import { FilePond, registerPlugin } from "react-filepond";
import { faLink, faTimes } from "@fortawesome/free-solid-svg-icons";
import { useRef, useState } from "react";

import { Button } from "../../../components/Button/Button";
import FilePondPluginFileValidateSize from "filepond-plugin-file-validate-size";
import FilePondPluginFileValidateType from "filepond-plugin-file-validate-type";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { H1 } from "../../../components/headings/h1";
import { H2 } from "../../../components/headings/h2";
import InputWrapper from "../../../components/InputWrapper/InputWrapper";
import Loader from "../../../components/Loader/Loader";
import ProfileForm from "../../../forms/ProfileForm";
import Subtitle from "../../../components/Subtitle/Subtitle";
import { redditUrl } from "../../../constants";
import styled from "styled-components";
import { useSearched } from "../../../hooks/useSearched";
import { useUser } from "../../../hooks/useUser";

const StyledLink = styled.a`
  background-color: ${(props) => props.theme.backgroundSecondary};
  color: ${(props) => props.theme.textLight};
`;

const StyledWrapper = styled.section`
  .searches {
    background-color: ${(props) => props.theme.backgroundSecondary};
    color: ${(props) => props.theme.text};
    svg path {
      fill: ${(props) => props.theme.textLight};
    }
  }

  .wpm {
    color: ${(props) => props.theme.text};
  }
`;

registerPlugin(FilePondPluginFileValidateSize, FilePondPluginFileValidateType);

const Profile = () => {
  const { searchedQuery, deleteSearch } = useSearched();
  const [audioFile, setAudioFile] = useState();
  const [suggestedWpm, setSuggestedWpm] = useState(null);
  const uploaderRef = useRef();

  const {
    query: { data: user, isLoading, refetch },
    update,
  } = useUser();
  const token = localStorage.getItem("token");

  if (isLoading) return <Loader size="2x" />;

  const handleWpmUpdate = () => {
    update.mutate({ words_per_minute: suggestedWpm });
    refetch();
  };

  return (
    <StyledWrapper className="max-w-lg">
      <H1>Profile</H1>
      <ProfileForm user={user} />
      <InputWrapper
        subLabel="Upload a 1 minute audio file to analyze and calculate your approximate
          words per minute. Accepted file types are MP3 and WAV. Please allow up to 1 minute for the file to process."
        label="Calculate custom WPM"
        className="mt-4"
      >
        <FilePond
          ref={uploaderRef}
          files={audioFile}
          onupdatefiles={setAudioFile}
          allowMultiple={false}
          maxFiles={1}
          server={{
            url: "http://localhost:4000/api/upload/v1/audio",
            process: {
              headers: {
                token: token,
              },
              onload: (data) => {
                const { words_per_minute } = JSON.parse(data);
                setSuggestedWpm(words_per_minute);
              },
            },
          }}
          allowFileSizeValidation={true}
          maxFileSize="20MB"
          instantUpload={true}
          name="files"
          labelIdle='Drag & Drop your files or <span class="filepond--label-action">Browse</span>'
          className="mt-4"
          allowFileTypeValidation={true}
          acceptedFileTypes={["audio/mpeg", "audio/wav"]}
        />
      </InputWrapper>
      {suggestedWpm && (
        <div className="flex flex-col gap-4 border-[1px] rounded-lg border-gray-200 p-4 mt-4">
          <div className="flex gap-4 wpm">
            <p className="text-sm">Suggested words per minute: </p>
            <span className="font-bold text-sm">{suggestedWpm}</span>
          </div>

          <Button variant="secondary" onClick={handleWpmUpdate}>
            Accept suggestion
          </Button>
        </div>
      )}

      <div className="mt-10 flex flex-col gap-4">
        <H2>Recent Searches</H2>
        {searchedQuery.data && searchedQuery.data.length === 0 && (
          <p className="text-light text-sm">Nothing to show</p>
        )}
        {searchedQuery.data &&
          searchedQuery.data.map((item) => (
            <div className="p-3 searches rounded-md">
              <FontAwesomeIcon
                icon={faTimes}
                className="mr-4"
                onClick={() => deleteSearch.mutate(item)}
              />
              {item.subreddit}
            </div>
          ))}
      </div>

      <hr className="mt-10 mb-10" />

      <section>
        <H2>Reddit Settings</H2>
        <Subtitle className="mt-2">
          (Re)Link your Reddit if something goes wrong or your Reddit profile
          has been updated.
        </Subtitle>
        <div className="flex">
          <StyledLink
            href={redditUrl}
            className="rounded-lg  p-3 flex w-44 mt-4 items-center justify-center"
          >
            <FontAwesomeIcon icon={faLink} className="mr-4" /> Link to Reddit
          </StyledLink>
        </div>
      </section>
    </StyledWrapper>
  );
};

export default Profile;
