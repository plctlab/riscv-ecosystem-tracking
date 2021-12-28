import {Layout, PageHeader, Row, Col, Radio, Space, Button, Divider} from 'antd';
import React, {useEffect, useState} from "react";
import 'antd/dist/antd.css';
import { useTranslation } from 'react-i18next';
import { useNavigate } from 'react-router-dom';
import Box from '@mui/material/Box';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';
import ListItem from '@mui/material/ListItem';
import ListItemText from '@mui/material/ListItemText';
import { FixedSizeList } from 'react-window';
import './searchByDevice.css';
import {RightOutlined} from "@ant-design/icons";

const { Content } = Layout;

const allData = require('../../database/test_data.json');

const SearchByDevice = () => {
    const { t } = useTranslation();
    const navigate = useNavigate();
    var currentSys = '';
    var availableSoftwares = [];
    var availableFeatures = [];

    const [chipsList, setChipsList] = useState([]);
    const [systemList, setSystemList] = useState([]);
    const [softwareList,setSoftwareList] = useState([]);
    const [featureList, setFeatureList] = useState([]);
    const [availableSoftwareList, setAvailableSoftwareList] = useState([]);
    const [availableFeatureList, setAvailableFeatureList] = useState([]);

    const [currentChipType, setCurrentChipType] = useState(1);
    const [currentChip,setCurrentChip] = useState('');
    const [currentSystem, setCurrentSystem] = useState('');
    const [currentSoftware, setCurrentSoftware] = useState('');
    const [currentFeature,setCurrentFeature] = useState('');

    const [hardwareTable, setHardwareTable] = useState(<div/>);
    const [systemTable, setSystemTable] = useState(<div/>);
    const [softwareTable,setSoftwareTable] = useState(<div/>);
    const [featureTable, setFeatureTable] = useState(<div/>);
    const [result,setResult] = useState(<div/>);

    const featureData = [
        'Please Select One Software to see features support',
    ];

    function renderAllChipsRow(props) {
        const { index, style } = props;
        return (
            <ListItem style={{...style, textAlign:`center`, borderBottom:'solid', borderBottomColor:'#c5c4c5',borderBottomWidth:'thin'}} key={index} component="div" disablePadding>
                <ListItemText primary={props.data[index]} />
            </ListItem>
        );
    }

    function renderAllSystemsRow(props) {
        const { index, style } = props;
        return (
            <ListItem style={{...style, textAlign:`center`, borderBottom:'solid', borderBottomColor:'#c5c4c5',borderBottomWidth:'thin'}} key={index} component="div" disablePadding>
                <ListItemText primary={props.data[index]} />
            </ListItem>
        );
    }

    function renderAllSoftwareRow(props) {
        const { index, style } = props;
        return (
            <ListItem style={{...style, textAlign:`center`, borderBottom:'solid', borderBottomColor:'#c5c4c5',borderBottomWidth:'thin'}} key={index} component="div" disablePadding>
                <ListItemText primary={props.data[index]} />
            </ListItem>
        );
    }

    function renderAllFeatureRow(props) {
        const { index, style } = props;
        return (
            <ListItem style={{...style, textAlign:`center`, borderBottom:'solid', borderBottomColor:'#c5c4c5',borderBottomWidth:'thin'}} key={index} component="div" disablePadding>
                <ListItemText primary={props.data[index]} />
            </ListItem>
        );
    }

    function renderChipSelected(e){
        setCurrentChip(e.target.value);
        setHardwareTable(<div>
            <Button type="primary" shape="round" size={'large'} disabled style={{width:'100%',borderRadius:4}}>
                {e.target.value}
            </Button>
        </div>)
    }

    function readChipsByType(value){
        switch (value) {
            default:
                setChipsList(Object.keys(allData.device_search_mode.hardware.cores));
                var cores = Object.keys(allData.device_search_mode.hardware.cores);
                setHardwareTable(
                    <FixedSizeList
                        height={400}
                        itemSize={46}
                        itemCount={cores.length}
                        overscanCount={5}
                        itemData={cores}
                        style={{borderRadius:4, borderStyle:'solid', borderColor:'#c5c4c5',borderWidth:'thin'}}
                    >
                        {renderAllChipsRow}
                    </FixedSizeList>
                );
                break
            case 1:
                setChipsList(Object.keys(allData.device_search_mode.hardware.cores));
                var cores = Object.keys(allData.device_search_mode.hardware.cores);
                setHardwareTable(
                    <FixedSizeList
                        height={400}
                        itemSize={46}
                        itemCount={cores.length}
                        overscanCount={5}
                        itemData={cores}
                        style={{borderRadius:4, borderStyle:'solid', borderColor:'#c5c4c5',borderWidth:'thin'}}
                    >
                        {renderAllChipsRow}
                    </FixedSizeList>
                );
                break
            case 2:
                setChipsList(Object.keys(allData.device_search_mode.hardware.socs));
                var socs = Object.keys(allData.device_search_mode.hardware.socs);
                setHardwareTable(
                    <FixedSizeList
                        height={400}
                        itemSize={46}
                        itemCount={socs.length}
                        overscanCount={5}
                        itemData={socs}
                        style={{borderRadius:4, borderStyle:'solid', borderColor:'#c5c4c5',borderWidth:'thin'}}
                    >
                        {renderAllChipsRow}
                    </FixedSizeList>
                );
                break
            case 3:
                setChipsList(Object.keys(allData.device_search_mode.hardware.platforms));
                var platforms = Object.keys(allData.device_search_mode.hardware.platforms);
                setHardwareTable(
                    <FixedSizeList
                        height={400}
                        itemSize={46}
                        itemCount={platforms.length}
                        overscanCount={5}
                        itemData={platforms}
                        style={{borderRadius:4, borderStyle:'solid', borderColor:'#c5c4c5',borderWidth:'thin'}}
                    >
                        {renderAllChipsRow}
                    </FixedSizeList>
                );
                break
        }
        setCurrentChip('');
    }
    
    function readSupportSystem(value){
        switch (currentChipType){
            case 1:
                // console.log(Object.keys(allData.device_search_mode.hardware.cores[value].support_system));
                var support_system = Object.keys(allData.device_search_mode.hardware.cores[value].support_system);
                setSystemTable(
                    <FixedSizeList
                        height={400}
                        itemSize={46}
                        itemCount={support_system.length}
                        overscanCount={5}
                        itemData={support_system}
                        style={{borderRadius:4, borderStyle:'solid', borderColor:'#c5c4c5',borderWidth:'thin'}}
                    >
                        {renderAllChipsRow}
                    </FixedSizeList>
                )
                setSystemList(support_system);
                break
            case 2:
                // console.log(Object.keys(allData.device_search_mode.hardware.socs[value].support_system));
                var support_system = Object.keys(allData.device_search_mode.hardware.socs[value].support_system)
                setSystemTable(
                    <FixedSizeList
                        height={400}
                        itemSize={46}
                        itemCount={support_system.length}
                        overscanCount={5}
                        itemData={support_system}
                        style={{borderRadius:4, borderStyle:'solid', borderColor:'#c5c4c5',borderWidth:'thin'}}
                    >
                        {renderAllChipsRow}
                    </FixedSizeList>
                )
                setSystemList(support_system);
                break
            case 3:
                // console.log(Object.keys(allData.device_search_mode.hardware.platforms[value].support_system));
                var support_system = Object.keys(allData.device_search_mode.hardware.platforms[value].support_system)
                setSystemTable(
                    <FixedSizeList
                        height={400}
                        itemSize={46}
                        itemCount={support_system.length}
                        overscanCount={5}
                        itemData={support_system}
                        style={{borderRadius:4, borderStyle:'solid', borderColor:'#c5c4c5',borderWidth:'thin'}}
                    >
                        {renderAllChipsRow}
                    </FixedSizeList>
                )
                setSystemList(support_system);
                break
        }
    }

    function renderSelectSystem(props){
        const { index, style } = props;
        return (
            <ListItem style={{...style, textAlign:`center`, borderBottom:'solid', borderBottomColor:'#c5c4c5',borderBottomWidth:'thin', color: props.data[index] === currentSys?'#64e764':'#FF7F7F'}} key={index} component="div" disablePadding>
                <ListItemText primary={props.data[index]} />
            </ListItem>
        );
    }

    function renderSystemSelected(e){
        currentSys = e.target.value;
        setCurrentSystem(currentSys);
        setSystemTable(
            <FixedSizeList
                height={400}
                itemSize={46}
                itemCount={systemList.length}
                overscanCount={5}
                itemData={systemList}
                style={{borderRadius:4, borderStyle:'solid', borderColor:'#c5c4c5',borderWidth:'thin'}}

            >
                {renderSelectSystem}
            </FixedSizeList>
        )
    }

    function renderSelectSoftware(props){
        const { index, style } = props;
        return (
            <ListItem style={{...style, textAlign:`center`, borderBottom:'solid', borderBottomColor:'#c5c4c5',borderBottomWidth:'thin', color: availableSoftwares.includes(props.data[index]) ? '#64e764':'#FF7F7F'}} key={index} component="div" disablePadding>
                <ListItemText primary={props.data[index]} />
            </ListItem>
        );
    }

    function readSupportSoftware(value){
        switch (currentChipType){
            case 1:
                var support_software = Object.keys(allData.device_search_mode.hardware.cores[currentChip].support_system[value].support_softwares);
                setSoftwareTable(
                    <FixedSizeList
                        height={400}
                        itemSize={46}
                        itemCount={softwareList.length}
                        overscanCount={5}
                        itemData={softwareList}
                        style={{borderRadius:4, borderStyle:'solid', borderColor:'#c5c4c5',borderWidth:'thin'}}
                    >
                        {renderSelectSoftware}
                    </FixedSizeList>
                )
                setAvailableSoftwareList(support_software);
                availableSoftwares = support_software;
                break
            case 2:
                // console.log(Object.keys(allData.device_search_mode.hardware.socs[value].support_system));
                var support_software = Object.keys(allData.device_search_mode.hardware.socs[currentChip].support_system[value].support_softwares);
                setSoftwareTable(
                    <FixedSizeList
                        height={400}
                        itemSize={46}
                        itemCount={softwareList.length}
                        overscanCount={5}
                        itemData={softwareList}
                        style={{borderRadius:4, borderStyle:'solid', borderColor:'#c5c4c5',borderWidth:'thin'}}
                    >
                        {renderSelectSoftware}
                    </FixedSizeList>
                )
                setAvailableSoftwareList(support_software);
                availableSoftwares = support_software;
                break
            case 3:
                // console.log(Object.keys(allData.device_search_mode.hardware.platforms[value].support_system));
                var support_software = Object.keys(allData.device_search_mode.hardware.platforms[currentChip].support_system[value].support_softwares);
                setSoftwareTable(
                    <FixedSizeList
                        height={400}
                        itemSize={46}
                        itemCount={softwareList.length}
                        overscanCount={5}
                        itemData={softwareList}
                        style={{borderRadius:4, borderStyle:'solid', borderColor:'#c5c4c5',borderWidth:'thin'}}
                    >
                        {renderSelectSoftware}
                    </FixedSizeList>
                )
                setAvailableSoftwareList(support_software);
                availableSoftwares = support_software;
                break
        }
    }

    function renderAvailableFeature(props){
        // console.log(availableFeatures);
        const { index, style } = props;
        return (
            <ListItem style={{...style, textAlign:`center`, borderBottom:'solid', borderBottomColor:'#c5c4c5',borderBottomWidth:'thin', color: availableFeatures.includes(props.data[index]) ? '#64e764':'#FF7F7F'}} key={index} component="div" disablePadding>
                <ListItemText primary={props.data[index]} />
            </ListItem>
        );
    }

    function readFeaturesOfOneSoftware(value){
        var software_features = Object.keys(allData.device_search_mode.software[value].features);
        setFeatureList(software_features);
        switch (currentChipType){
            case 1:
                var support_feature = Object.keys(allData.device_search_mode.hardware.cores[currentChip].support_system[currentSystem].support_softwares[value].support_features);
                // setFeatureList(support_feature);
                setFeatureTable(
                    <FixedSizeList
                        height={400}
                        itemSize={46}
                        itemCount={software_features.length}
                        overscanCount={5}
                        itemData={software_features}
                        style={{borderRadius:4, borderStyle:'solid', borderColor:'#c5c4c5',borderWidth:'thin'}}
                    >
                        {renderAvailableFeature}
                    </FixedSizeList>
                )
                availableFeatures = support_feature;
                setAvailableFeatureList(support_feature);
                break
            case 2:
                // console.log(Object.keys(allData.device_search_mode.hardware.socs[value].support_system));
                var support_feature = Object.keys(allData.device_search_mode.hardware.socs[currentChip].support_system[currentSystem].support_softwares[value].support_features);
                // setFeatureList(support_feature);
                setFeatureTable(
                    <FixedSizeList
                        height={400}
                        itemSize={46}
                        itemCount={software_features.length}
                        overscanCount={5}
                        itemData={software_features}
                        style={{borderRadius:4, borderStyle:'solid', borderColor:'#c5c4c5',borderWidth:'thin'}}
                    >
                        {renderAvailableFeature}
                    </FixedSizeList>
                )
                availableFeatures = support_feature;
                setAvailableFeatureList(support_feature);
                break
            case 3:
                // console.log(Object.keys(allData.device_search_mode.hardware.platforms[value].support_system));
                var support_feature = Object.keys(allData.device_search_mode.hardware.platforms[currentChip].support_system[currentSystem].support_softwares[value].support_features);
                // setFeatureList(support_feature);
                setFeatureTable(
                    <FixedSizeList
                        height={400}
                        itemSize={46}
                        itemCount={software_features.length}
                        overscanCount={5}
                        itemData={software_features}
                        style={{borderRadius:4, borderStyle:'solid', borderColor:'#c5c4c5',borderWidth:'thin'}}
                    >
                        {renderAvailableFeature}
                    </FixedSizeList>
                )
                availableFeatures = support_feature;
                setAvailableFeatureList(support_feature);
                break
        }
    }


    function checkResult(){
        // console.log(currentFeature);
        // console.log(availableFeatureList);
        if(availableFeatureList.includes(currentFeature)){
            setResult(
                <div style={{ border:'solid', width:'100%',color:'#000', textAlign:'center', fontSize:'2.5em', display:'flex', justifyContent:'center', alignItems:'center'}}>
                    This feature Available On this setup.
                </div>
            )
        }else{
            setResult(
                <div style={{  border:'solid', width:'100%',color:'#000', textAlign:'center', fontSize:'2.5em', display:'flex', justifyContent:'center', alignItems:'center'}}>
                    This feature Not available On this setup.
                </div>
            )
        }
    }


    useEffect(()=>{
        setChipsList(Object.keys(allData.device_search_mode.hardware.cores));
        setSystemList(Object.keys(allData.device_search_mode.system));
        setSoftwareList(Object.keys(allData.device_search_mode.software))
        setHardwareTable(
            <FixedSizeList
                height={400}
                itemSize={46}
                itemCount={Object.keys(allData.device_search_mode.hardware.cores).length}
                overscanCount={5}
                itemData={Object.keys(allData.device_search_mode.hardware.cores)}
                style={{borderRadius:4, borderStyle:'solid', borderColor:'#c5c4c5',borderWidth:'thin'}}
            >
                {renderAllChipsRow}
            </FixedSizeList>
        );

        setSystemTable(
            <FixedSizeList
                height={400}
                itemSize={46}
                itemCount={Object.keys(allData.device_search_mode.system).length}
                overscanCount={5}
                itemData={Object.keys(allData.device_search_mode.system)}
                style={{borderRadius:4, borderStyle:'solid', borderColor:'#c5c4c5',borderWidth:'thin'}}
            >
                {renderAllSystemsRow}
            </FixedSizeList>
        );
        setSoftwareTable(
            <FixedSizeList
                height={400}
                itemSize={46}
                itemCount={Object.keys(allData.device_search_mode.software).length}
                overscanCount={5}
                itemData={Object.keys(allData.device_search_mode.software)}
                style={{borderRadius:4, borderStyle:'solid', borderColor:'#c5c4c5',borderWidth:'thin'}}
            >
                {renderAllSoftwareRow}
            </FixedSizeList>
        );
        setFeatureTable(
            <FixedSizeList
                height={400}
                itemSize={46}
                itemCount={featureData.length}
                overscanCount={5}
                itemData={featureData}
                style={{borderRadius:4, borderStyle:'solid', borderColor:'#c5c4c5',borderWidth:'thin'}}
            >
                {renderAllFeatureRow}
            </FixedSizeList>
        );
    },[])

    const routes = [
        {
            path: '/',
            breadcrumbName: t('project_name')
        },
        {
            path: '/searchByDevice',
            breadcrumbName: t('search_availability_by_device')
        }
    ]

    return (
        <div>
            <Content name={'SearchByDeviceContainer'} style={{ padding: '0 50px' }}>
                <PageHeader
                    className="searchByDeviceHeader"
                    title={t('searchByDevice')}
                    breadcrumb={{routes}}
                    onBack={()=>{
                        navigate('/');
                    }}
                />
                <Row style={{paddingTop:'5%'}}>
                    <Col span={4} offset={2}>
                        <Radio.Group className={'chip-type-select-radio'} onChange={(e)=>{
                            // console.log(e.target.value);
                            setCurrentChipType(e.target.value);
                            readChipsByType(e.target.value);
                        }} value={currentChipType} size={'large'} style={{fontSize:'250%'}}>
                            <Space direction="vertical">
                                <Radio value={1}>Core</Radio>
                                <Radio value={2}>Soc</Radio>
                                <Radio value={3}>Platform</Radio>
                            </Space>
                        </Radio.Group>
                    </Col>
                    <Col span={14} offset={1}>
                        <div style={{ background:'linear-gradient(90deg,#0a6b7c 0%,#273272 100%)', opacity:'1',width:'100%',height:'100%',color:'#fff', textAlign:'center', fontSize:'2.5em', display:'flex', justifyContent:'center', alignItems:'center'}}>
                            {t('search_by_device_hint')}
                        </div>
                    </Col>
                </Row>
                <Row>
                    <Col span={4} offset={2}>
                        <Box sx={{ minWidth: 120 }} style={{paddingTop:'10%'}}>
                            <FormControl fullWidth>
                                <InputLabel id="chip-select-label">{t('chipSelect')}</InputLabel>
                                <Select
                                    id="chip-select"
                                    value={currentChip}
                                    label={t('chipSelect')}
                                    onChange={(e)=>{
                                        renderChipSelected(e);
                                        readSupportSystem(e.target.value);
                                    }}
                                >
                                    {chipsList.map((eachChip) => (
                                        <MenuItem value={eachChip}>{eachChip}</MenuItem>
                                    ))}
                                </Select>
                            </FormControl>
                        </Box>
                    </Col>
                    <Col span={4} offset={1}>
                        <Box sx={{ minWidth: 120 }} style={{paddingTop:'10%'}}>
                            <FormControl id="system-select-fc" fullWidth>
                                <InputLabel id="system-select-label">{t('systemSelect')}</InputLabel>
                                <Select
                                    id="system-select"
                                    value={currentSystem}
                                    label={t('systemSelect')}
                                    onChange={(e)=>{
                                        setCurrentSystem(e.target.value);
                                        renderSystemSelected(e);
                                        readSupportSoftware(e.target.value);
                                    }}
                                >
                                    {systemList.map((eachSystem) => (
                                        <MenuItem value={eachSystem}>{eachSystem}</MenuItem>
                                    ))}
                                </Select>
                            </FormControl>
                        </Box>
                    </Col>
                    <Col span={4} offset={1}>
                        <Box sx={{ minWidth: 120 }} style={{paddingTop:'10%'}}>
                            <FormControl fullWidth>
                                <InputLabel id="software-select-label">{t('softwareSelect')}</InputLabel>
                                <Select
                                    id="software-select"
                                    value={currentSoftware}
                                    label={t('softwareSelect')}
                                    onChange={(e)=>{
                                        setCurrentSoftware(e.target.value);
                                        readFeaturesOfOneSoftware(e.target.value);
                                    }}
                                >
                                    {availableSoftwareList.map((eachSoftware) => (
                                        <MenuItem value={eachSoftware}>{eachSoftware}</MenuItem>
                                    ))}
                                </Select>
                            </FormControl>
                        </Box>
                    </Col>
                    <Col span={4} offset={1}>
                        <Box sx={{ minWidth: 120 }} style={{paddingTop:'10%'}}>
                            <FormControl fullWidth>
                                <InputLabel id="feature-select-label">{t('featureSelect')}</InputLabel>
                                <Select
                                    id="feature-select"
                                    value={currentFeature}
                                    label={t('featureSelect')}
                                    onChange={(e)=>{
                                        setCurrentFeature(e.target.value);
                                    }}
                                >
                                    {featureList.map((eachFeature) => (
                                        <MenuItem value={eachFeature}>{eachFeature}</MenuItem>
                                    ))}
                                </Select>
                            </FormControl>
                        </Box>
                    </Col>
                </Row>
                <Row style={{paddingTop:'3%'}}>
                    <Col span={14} offset={2}>
                        {result}
                    </Col>
                    <Col span={4} offset={1}>
                        <Button className={'lookup_button'} type="primary" shape={'round'} size={'large'} block icon={<RightOutlined />} onClick={()=>{
                            checkResult();
                        }}>{t('start_lookup')}</Button>
                    </Col>
                </Row>

                <Divider orientation="left" style={{paddingTop:'2%'}}>{t('look_up_table')}</Divider>
                <Row style={{paddingTop:'2%', paddingBottom:'2%'}}>
                    <Col span={4} offset={2}>
                        <div style={{fontSize:'large', paddingBottom:'10%'}}>{t('hardware')}</div>
                        {hardwareTable}
                    </Col>
                    <Col span={4} offset={1}>
                        <div style={{fontSize:'large', paddingBottom:'10%'}}>{t('system')}</div>
                        {systemTable}
                    </Col>
                    <Col span={4} offset={1}>
                        <div style={{fontSize:'large', paddingBottom:'10%'}}>{t('software')}</div>
                        {softwareTable}
                    </Col>
                    <Col span={4} offset={1}>
                        <div style={{fontSize:'large', paddingBottom:'10%'}}>{t('feature')}</div>
                        {featureTable}
                    </Col>
                </Row>
                <Divider orientation="center" style={{paddingTop:'2%'}}>{t('look_up_table_end')}</Divider>
            </Content>



        </div>
    )
}

export default SearchByDevice;