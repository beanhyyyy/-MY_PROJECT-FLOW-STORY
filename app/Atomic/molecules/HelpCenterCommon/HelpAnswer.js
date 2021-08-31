import React from 'react';
import PropTypes from 'prop-types';
import AtomBox from '../../../../../Atomic/atoms/Box';
import AtomChip from '../../../../../Atomic/atoms/Chip';
import AtomTypography from '../../../../../Atomic/atoms/Typography';
import TextGrid from '../../../../../Atomic/molecules/Text/TextGrid';
import SectionTemplate from '../../../../../Atomic/templates/SectionTemplate';
import { imgSampleRandom } from '../../../../../Atomic/_settings/dataDemo';

export default function HelpAnswer({ data }) {
  return (
    <SectionTemplate>
      {data.answer && <AtomTypography>{data.answer}</AtomTypography>}
      {data.imageAnswer && (
        <AtomBox px={5}>
          <img
            src={imgSampleRandom()}
            alt={imgSampleRandom()}
            width="90%"
            height="auto"
          />
        </AtomBox>
      )}
      {data.step &&
        data.step.map((item, index) => {
          const key = index + 1;
          return (
            <SectionTemplate key={key}>
              <TextGrid
                label={<AtomChip label={key} color="primary" size="small" />}
                value={item.textStep}
                hasColon={false}
                containerProps={{
                  spacing: 2,
                  alignItems: 'center',
                  wrap: 'nowrap'
                }}
              />
              {item.imageStep && (
                <AtomBox px={5}>
                  <img
                    src={imgSampleRandom()}
                    alt={imgSampleRandom()}
                    width="90%"
                    height="auto"
                  />
                </AtomBox>
              )}
            </SectionTemplate>
          );
        })}
    </SectionTemplate>
  );
}

HelpAnswer.propTypes = {
  data: PropTypes.any
};

HelpAnswer.defaultProps = {
  data: {}
};
